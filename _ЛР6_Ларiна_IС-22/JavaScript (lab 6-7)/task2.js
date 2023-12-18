function MakeBold() 
{
    event.preventDefault();
    let input = document.getElementById('input_text');
    let output = document.getElementById('output_text');
    const boldRegex = /<b\b[^>]*>(.*?)<\/b>/; // Регулярний вираз для вилучення тегів <b> HTML
    const formatRegex = /<[^>]*>/g; // Регулярний вираз для вилучення тегів HTML
    
    if (!output.innerHTML.trim()|| (output.innerHTML.replace(formatRegex, '') != input.innerHTML.replace(formatRegex, ''))) 
    {
        output.innerHTML = input.innerHTML;
    }

    if (boldRegex.test(output.innerHTML)) 
    {
        output.innerHTML = output.innerHTML.replace(boldRegex, '$1');
    } 
    else 
    {
        output.innerHTML = `<b>${output.innerHTML}</b>`;
    }
}

function MakeItalic() 
{
    event.preventDefault();
    let input = document.getElementById('input_text');
    let output = document.getElementById('output_text');
    const italicRegex = /<i\b[^>]*>(.*?)<\/i>/;
    const formatRegex = /<[^>]*>/g; 

    if (!output.innerHTML.trim()|| (output.innerHTML.replace(formatRegex, '') != input.innerHTML.replace(formatRegex, ''))) 
    {
        output.innerHTML = input.innerHTML;
    }
    
    if (italicRegex.test(output.innerHTML)) 
    {
        output.innerHTML = output.innerHTML.replace(italicRegex, '$1');
    } 
    else 
    {
        output.innerHTML = `<i>${output.innerHTML}</i>`;
    }
}

function MakeUnderline() 
{
    event.preventDefault();
    let input = document.getElementById('input_text');
    let output = document.getElementById('output_text');
    const underlineRegex = /<u\b[^>]*>(.*?)<\/u>/;
    const formatRegex = /<[^>]*>/g;
    
    if (!output.innerHTML.trim()|| (output.innerHTML.replace(formatRegex, '') != input.innerHTML.replace(formatRegex, ''))) 
    {
        output.innerHTML = input.innerHTML;
    }

    if (underlineRegex.test(output.innerHTML)) {
        output.innerHTML = output.innerHTML.replace(underlineRegex, '$1');
    } else {
        output.innerHTML = `<u>${output.innerHTML}</u>`;
    }
}


function ChangeColor(color)
{
    event.preventDefault();
    let input = document.getElementById('input_text');
    let output = document.getElementById('output_text');
    const formatRegex = /<[^>]*>/g;
    
    if (!output.innerHTML.trim()|| (output.innerHTML.replace(formatRegex, '') != input.innerHTML.replace(formatRegex, ''))) 
    {
        output.innerHTML = input.innerHTML;
    }
    output.style.color = color;
}


function MakeUppercase()
{
    event.preventDefault();
    let input = document.getElementById('input_text');
    let output = document.getElementById('output_text');
    const formatRegex = /<[^>]*>/g; 
    
    if (!output.innerHTML.trim()|| (output.innerHTML.replace(formatRegex, '') != input.innerHTML.replace(formatRegex, ''))) 
    {
        output.innerHTML = input.innerHTML;
    }
    
    const formattedText = output.innerHTML.toUpperCase(); 
    output.innerHTML = formattedText;
}


function MakeLowercase()
{
    event.preventDefault();
    let input = document.getElementById('input_text');
    let output = document.getElementById('output_text');
    const formatRegex = /<[^>]*>/g; // Регулярний вираз для вилучення тегів HTML
    
    if (!output.innerHTML.trim()|| (output.innerHTML.replace(formatRegex, '') != input.innerHTML.replace(formatRegex, ''))) 
    {
        output.innerHTML = input.innerHTML;
    }

    const formattedText = output.innerHTML.toLowerCase(); 
    output.innerHTML = formattedText;
}

function Clear()
{   
    event.preventDefault();
    let input = document.getElementById('input_text');
    let output = document.getElementById('output_text');
    const formattedText = input.innerHTML; 
    output.style.color = "black";
    output.innerHTML = formattedText;
}