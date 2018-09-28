instanceof 与 typeof 区别：

typeof

    作用：
        typeof用以获取一个变量或者表达式的类型，一般只能返回如下几个结果：number , boolean , string , function , object , undefined 。
        使用typeof来获取一个变量是否存在或未被赋值： typeof 变量=== ' undefined '为true表示该变量存在/被赋值，否则反之。

instanceof

    作用：
        instanceof 用于判断一个变量是否某个对象的实例。
        function instance_of(L, R) {        //L 表示左表达式，R 表示右表达式
            var O = R.prototype;        // 取 R 的显示原型
            L = L.__proto__;        //取 L 的隐式原型
            while (true) { 
                if (L === null) return false; 
                if (O === L) return true;        //这里重点：当 O 严格等于 L 时，返回 true 
                L = L.__proto__; 
            } 
        }
        例如：Object instanceof Object        ==>true

            原理（研读函数 instance_of ）：
                var left = Object.__proto__;      // Function.prototype
                var right = Object.prototype;      // Object.prototype
                //第一次比较：(left === right) 条件不成立
                left = left.__proto__;      // Object.prototype
                //第二次比较：(left === right) 条件成立
                return true;

        例如：Function instanceof Object        ==>true

            原理（研读函数 instance_of ）：
                var left = Function.__proto__;      // Function.prototype
                var right = Object.prototype;      // Object.prototype
                //第一次比较：(left === right) 条件不成立
                left = left.__proto__;      // Object.prototype
                //第二次比较：(left === right) 条件成立
                return true;

        例如：Function instanceof Function        ==>true

            原理（研读函数 instance_of ）：
                var left = Function.__proto__;      // Function.prototype
                var right = Function.prototype;      // Function.prototype
                //第一次比较：(left === right) 条件成立
                return true;

        例如：String instanceof String        ==>false

            原理（研读函数 instance_of ）：
                var left = String.__proto__;      // Function.prototype
                var right = String.prototype;      // String.prototype
                //第一次比较：(left === right) 条件不成立
                left = left.__proto__;      // Object.prototype
                //第二次比较：(left === right) 条件不成立
                left = left.__proto__;      // null
                //if (left === null) 条件成立
                return false;

        例如：String instanceof Object        ==>true

            原理（研读函数 instance_of ）：
                var left = String.__proto__;      // Function.prototype
                var right = Object.prototype;      // Object.prototype
                //第一次比较：(left === right) 条件成立
                left = left.__proto__;      // Object.prototype
                //第二次比较：(left === right) 条件成立
                return true;

    ：注意：
    
        instanceof 运算符只对对象有效。
        例如：
            var a = 'hello';
            a instanceof String        ===>false

            var left = a.__proto__;      // String.prototype
            var right = Object.prototype;      // String.prototype
            //第一次比较：(left === right )条件成立 
            可为什么最后却返回false呢？
            原因： ''（字符串） , true/false , 1（数字）是以  String , Boolean , Number 为数据类型的值，并不是  String , Boolean , Number 的实例对象，变量 instanceof 构造函数 在只有左侧是右侧类的对象时才返回true。但一切皆对象，所以这些都可以看做 Object 的实例。所以 a.__proto__ 为null。
        
