import { useEffect } from "react"
import mermaid from "mermaid"

const useMermaidEffect = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    })
    if (!document) return
    const elements: HTMLCollectionOf<Element> =
      document.getElementsByClassName("language-mermaid")
    if (!elements) return

    const renderMermaid = async () => {
      for (let i = 0; i < elements.length; i++) {
        try {
          const { svg } = await mermaid.render(
            "mermaid" + i,
            elements[i].textContent || ""
          )
          elements[i].innerHTML = svg
        } catch (error) {
          console.error("Mermaid render error:", error)
        }
      }
    }

    renderMermaid()
  }, [])

  return
}

export default useMermaidEffect
