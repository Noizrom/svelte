<script lang="ts">
  let { data } = $props();

  let darkMode = $state(false);
  let serverResponse = $state(data.sresp);
  let loading = $state(false);
  let lastChecked = $state(new Date().toLocaleTimeString());

  // Calculator state
  let calcA = $state(10);
  let calcB = $state(5);
  let calcOperation = $state("add");
  let calcResult = $state<number | null>(null);
  let calcLoading = $state(false);

  async function checkServer() {
    loading = true;
    try {
      const response = await fetch("http://localhost:7000/checkserver");
      const result = await response.json();
      serverResponse = result.message;
      lastChecked = new Date().toLocaleTimeString();
    } catch (error) {
      serverResponse = "Error: Server not responding";
    } finally {
      loading = false;
    }
  }

  async function calculate() {
    calcLoading = true;
    try {
      const response = await fetch("http://localhost:7000/api/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          a: calcA,
          b: calcB,
          operation: calcOperation,
        }),
      });

      if (!response.ok) {
        throw new Error("Calculation failed");
      }

      const result = await response.json();
      calcResult = result.result;
    } catch (error) {
      calcResult = null;
      alert("Error performing calculation. Make sure the server is running!");
    } finally {
      calcLoading = false;
    }
  }

  function toggleDarkMode() {
    darkMode = !darkMode;
  }
</script>

<svelte:head>
  <title>SvelteKit + Python Template</title>
</svelte:head>

<div class="min-h-screen transition-colors duration-300" class:dark={darkMode}>
  <div
    class="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
  >
    <!-- Header -->
    <header
      class="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
    >
      <div
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <h1
          class="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          SvelteKit + Python
        </h1>
        <button
          onclick={toggleDarkMode}
          class="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          aria-label="Toggle dark mode"
        >
          {#if darkMode}
            <svg
              class="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          {:else}
            <svg
              class="w-6 h-6 text-slate-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
          {/if}
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12 max-w-4xl">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h2
          class="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-slate-100"
        >
          Full-Stack Template
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A modern template combining SvelteKit 5, Python FastAPI, and Deno for
          rapid full-stack development
        </p>
      </div>

      <!-- Server Status Card -->
      <div
        class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-100">
            Python Backend Status
          </h3>
          <span
            class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <span class="relative flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
              ></span>
            </span>
            Connected
          </span>
        </div>

        <div
          class="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-4 font-mono text-sm"
        >
          <p class="text-slate-700 dark:text-slate-300">
            {serverResponse}
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
            Last checked: {lastChecked}
          </p>
        </div>

        <button
          onclick={checkServer}
          disabled={loading}
          class="w-full py-3 px-6 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-400 text-white font-medium rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none shadow-lg"
        >
          {#if loading}
            <span class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Checking...
            </span>
          {:else}
            Check Server Connection
          {/if}
        </button>
      </div>

      <!-- API Test - Calculator -->
      <div
        class="mb-8 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <h3
          class="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4"
        >
          🧮 Test API - Calculator
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
          This demonstrates a POST request to the Python backend API
        </p>

        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="calcA"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Number A
            </label>
            <input
              id="calcA"
              type="number"
              bind:value={calcA}
              class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-slate-100"
            />
          </div>
          <div>
            <label
              for="calcB"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Number B
            </label>
            <input
              id="calcB"
              type="number"
              bind:value={calcB}
              class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        <div class="mb-4">
          <label
            for="operation"
            class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Operation
          </label>
          <select
            id="operation"
            bind:value={calcOperation}
            class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-slate-100"
          >
            <option value="add">Addition (+)</option>
            <option value="subtract">Subtraction (−)</option>
            <option value="multiply">Multiplication (×)</option>
            <option value="divide">Division (÷)</option>
          </select>
        </div>

        {#if calcResult !== null}
          <div
            class="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
          >
            <p
              class="text-sm text-green-800 dark:text-green-300 font-medium mb-1"
            >
              Result:
            </p>
            <p class="text-2xl font-bold text-green-900 dark:text-green-100">
              {calcResult}
            </p>
          </div>
        {/if}

        <button
          onclick={calculate}
          disabled={calcLoading}
          class="w-full py-3 px-6 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-400 disabled:to-slate-400 text-white font-medium rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none shadow-lg"
        >
          {#if calcLoading}
            <span class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Calculating...
            </span>
          {:else}
            Calculate
          {/if}
        </button>
      </div>

      <!-- Features Grid -->
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
          ✨ Features
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
          {#each [{ icon: "🐍", title: "Python FastAPI", desc: "High-performance async backend" }, { icon: "🦕", title: "Deno Runtime", desc: "Modern, secure JavaScript runtime" }, { icon: "⚡", title: "Svelte 5 Runes", desc: "Next-gen reactivity with $state & $props" }, { icon: "🎨", title: "Tailwind CSS v4", desc: "Configless utility-first CSS" }, { icon: "📱", title: "PWA Ready", desc: "Progressive Web App support" }, { icon: "🔷", title: "TypeScript", desc: "Full type safety across stack" }] as feature}
            <div
              class="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg group"
            >
              <div class="flex items-start gap-4">
                <span
                  class="text-4xl group-hover:scale-110 transition-transform"
                  >{feature.icon}</span
                >
                <div>
                  <h4
                    class="font-semibold text-slate-800 dark:text-slate-100 mb-1"
                  >
                    {feature.title}
                  </h4>
                  <p class="text-sm text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Tech Stack -->
      <div
        class="p-6 bg-linear-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-blue-200 dark:border-slate-600"
      >
        <h3
          class="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-100"
        >
          🚀 Tech Stack
        </h3>
        <div class="flex flex-wrap gap-2">
          {#each ["SvelteKit", "Svelte 5", "FastAPI", "Deno", "Tailwind v4", "TypeScript", "Vite", "Python"] as tech}
            <span
              class="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
            >
              {tech}
            </span>
          {/each}
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-200 dark:border-slate-700 mt-12 py-6">
      <div
        class="container mx-auto px-4 text-center text-sm text-slate-600 dark:text-slate-400"
      >
        <p>Built with ❤️ using SvelteKit and Python FastAPI</p>
      </div>
    </footer>
  </div>
</div>
