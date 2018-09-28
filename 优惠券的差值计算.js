var jsonList=[
    {base: "5", coupon_type_num: "1", coupon_money: "99.00"},
    {base: "3", coupon_type_num: "1", coupon_money: "80.00"},
    {base: "1", coupon_type_num: "1", coupon_money: "70.00"},
],couponList=[];
//该函数没有对数组的最大长度做限制（idx值）
//该函数没有对小数做整数处理
function couponComputed(base,temp,idx=0){
    if(base>=temp[idx].base){
        couponList.push(
            {
                num:parseInt(base/temp[idx].base),
                pie:temp[idx].coupon_money
            }
        )
        if(base%temp[idx].base){
            liss(base%temp[idx].base,temp,++idx);
        }
    }else{
        liss(base,temp,++idx);
    }    
    
}
// couponComputed第一个参数为user的选购总价，jsonList为后台提供的优惠券的列表，参数三为从第几条开始，默认值为0
couponComputed(21,jsonList);
// couponList存放了适合该user的优惠券集合
console.log(couponList);
