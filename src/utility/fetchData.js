export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c02182ead3msh53088339a4d9b16p1fe119jsn5239ff43e07c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };

export const fetchData = async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    // console.log(data);
    return data;
}