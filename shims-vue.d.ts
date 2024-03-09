declare module '*.vue' {
  import type { defineComponent } from 'vue'
  const Components: ReturnType<typeof defineComponent>
  export default Components
}
