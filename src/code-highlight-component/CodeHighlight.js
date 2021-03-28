import { React } from "react";
// import Prism from "prismjs";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";
// import "../prism.css";

export const CodeHighlight = ({ code, language }) => {
  const inputCode = code;
  const inputLanguage = language;

  console.log(inputCode, inputLanguage);
  // useEffect(() => {
  //   highlight();
  // });

  // const codeRef = useRef(null);

  // const highlight = () => {
  //   console.log({codeRef});
  //   if (codeRef && codeRef.current!==undefined && codeRef.current !== null) {
  //     // Prism.highlightElement(codeRef.current);
  //     Prism.highlightElement(codeRef.current)
  //   }
  // };

  // return (
  //   <pre >
  //     <code ref={codeRef} className={`language-${inputLanguage}`}>
  //       {inputCode}
  //     </code>
  //   </pre>
  // );

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle ={{borderRadius:"0.3rem"}}>
      {inputCode}
    </SyntaxHighlighter>
      
    
  );
};
