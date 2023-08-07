function addtwosum (a,t){
  let sum =[];
  for (let i =0; i<a.length;i++){
    for (let j=0;j<i;j++){
        if (a[i] + a[j] === t){
            sum =[i,j]
            break;
        }
    }
  }
  return sum
}



const array = [1,2,3,4,5,6,7,8,,9]
const target = 9
const result = addtwosum(array,target)
console.log(result);
