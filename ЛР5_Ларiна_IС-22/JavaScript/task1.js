function Create()
{
    event.preventDefault();
    const input_A = document.getElementById('input_array_A').value;
    const arr_A = input_A.split(' ').map(Number); 
    
    const input_B = document.getElementById('input_array_B').value;
    const arr_B = input_B.split(' ').map(Number); 
    
    const output=document.getElementById("output_array_C");
    output.value=Create_array_C(arr_A,arr_B).join(' ');
}

function Create_array_C(arr_A, arr_B)
{
    const len = 10;
    let arr_C =[];
    for (let i = 0; i < len; i++) 
    {   
        if (arr_A[i] == arr_B[i]) 
        {
            arr_C.push(1);
        }
        else
        {
            arr_C.push((1/(arr_A[i]-arr_B[i])).toFixed(2));
        }

    }
    return arr_C;
}

function Change()
{
    event.preventDefault();
    const input = document.getElementById('input_first_array').value;
    const numbers = input.split(' ').map(Number); 
    const output=document.getElementById("show_second_array");
    output.value=Change_first_max(numbers).join(' ');
}

function Change_first_max(arr)
{
    const len = arr.length;
    let max = 0;
    let max_index = 0;
    for (let i = 0; i < len; i++) 
    {    
        if (arr[i] > max) 
        {
            max = arr[i];
            max_index=i;
        }
    }

    let temp = arr[0];
    arr[0] = max;
    arr[max_index] = temp;
    
    return arr;
}


function Sort_array() 
{
    event.preventDefault();
    const input = document.getElementById('input_for_sort').value;
    const numbers = input.split(' ').map(Number);
    const output=document.getElementById("show_sort_array");
    output.value=BubbleSort(numbers).join(' ');
}

function BubbleSort(arr) 
{
    const len = arr.length;
    for (let i = 0; i < len; i++) 
    {
        for (let j = 0; j < len - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}