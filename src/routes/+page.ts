export async function load() {
  try {
    const resp = await fetch("http://localhost:7000/checkserver");
    const sresp = await resp.text();
    return {
      sresp,
    };
  } catch (e) {
    console.error(e);
    return {
      sresp: "Error connecting to server",
    };
  }
}
