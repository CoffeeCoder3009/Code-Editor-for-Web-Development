let output = document.querySelector(".output")
let allInputs = document.querySelectorAll(".leftPart textarea")

let htmlCode,cssCode,jsCode = '';

allInputs.forEach((ele,index)=>{
    ele.addEventListener("keyup",()=>{
        if(index == 0){
            htmlCode = ele.value;
        }
        if(index == 1){
            cssCode = ele.value;
        }
        if(index == 2){
            jsCode = ele.value;
        }

        const doc = output.contentDocument || output.contentWindow;
        doc.open();
        doc.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
            </html>
        `);
        doc.close();
        // output.contentDocument.body.innerHTML = htmlCode;
        // output.contentDocument.head.innerHTML = cssCode;
        // output.contentWindow.eval(jsCode);
    })
    
})