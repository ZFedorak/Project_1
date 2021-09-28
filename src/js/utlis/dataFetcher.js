/* async creates promises
 datafetcher function
 description:
 parameter: 
 url:string
*/

const dataFetcher = async function (url=null){
  const response = await fetch(url)
  const data = await response.json() 

  return data
}

export default dataFetcher