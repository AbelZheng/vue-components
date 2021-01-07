export default function getTemplate(html) {
  return `
  <template>
    ${html}
  </template>

  <script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    }
  };
  </script>
  
  <style>
  </style>
  `
}
