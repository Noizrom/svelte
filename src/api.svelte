<script context="module" lang="ts">
  import axios from 'axios'

  export async function check_server() {
    let response: string = 'Error Thingy'
    try {
      response = await axios.get('http://localhost:7000/checkserver')
    } catch (e) {
      console.error(e)
    } finally {
      return response
    }
  }
</script>
