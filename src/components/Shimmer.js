const Shimmer=()=>{
    const arr=[]
   for(let i=0;i<20;i++){
    arr.push(<div key={i}  className="m-4 p-4 h-[400px] w-[250px] bg-gray-200"></div>);
     
   } 
   return <div className="flex flex-wrap">{arr}</div>
};
export default Shimmer