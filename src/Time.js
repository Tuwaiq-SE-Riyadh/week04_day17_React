

function Gettime(){
    return (
        <>
            <div>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
            </div>
        </>
      );
      
}
setInterval(Gettime,1000)


export default Gettime;

