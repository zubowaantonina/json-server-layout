export const debounce=(func, ms=300)=>{
    let timer
    return(...arg)=>{
       clearTimeout(timer)
     timer=setTimeout(()=>{func.apply(this, arg)}, ms); 
    }
    
}