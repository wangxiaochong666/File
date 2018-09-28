__proto__ 与 prototype 的区别：

    js里所有的对象都有proto属性(对象，函数)，指向构造该对象的构造函数的原型；
    __proto__是每个对象都有的一个属性，而prototype是函数才会有的属性。

__proto__

    定义： 
        对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。
        
prototype

    定义：
        几乎所有的函数（除了一些内建函数）都有一个名为prototype（原型）的属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以有特定类型的所有实例共享的属性和方法。prototype是通过调用构造函数而创建的那个对象实例的原型对象。
    检验方法：
        hasOwnProperty()判断指定属性是否为自有属性；in操作符对原型属性和自有属性都返回true。
        鉴别原型属性：
            function hasPrototypeProperty(obj, name){
                return name in obj && !obj.hasOwnProperty(name);
            }

例如：
    ：注： 
        prototype 的 constrcutor 指向它的构造函数
        构造函数的 prorotype 指向它的原型对象（ prototype ）

    function foo(){}    （foo有 __proto__ 与 prototype 两个属性。（原因同上））

    foo. __proto__      ===> Function.prototype对象（所有函数都是通过调用Function实现的。）
        foo. __proto__ . __proto__      ===> Object.prototype对象（一切皆对象，所以都是Object的实例对象。）
            foo. __proto__ . __proto__ . __proto__      ===> null（Object为最底层对象，它的 __proto__ 为null）


    foo. prototype       ===> foo.prototype对象（prototype指向调用构造函数而创建的那个对象实例的原型对象。）
        foo. prototype . __proto__      ===> Object.prototype对象（一切皆对象，所以都是Object的实例对象。）
            foo. prototype . __proto__. constructor      ===> function Object(){} 
                foo. prototype . __proto__. constructor . __proto__      ===> Function.prototype对象（所有函数都是通过调用Function实现的。）
            foo. prototype . __proto__ . __proto__      ===> null（Object为最底层对象，它的 __proto__ 为null）