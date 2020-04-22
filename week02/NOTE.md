# 每周总结可以写在这里
什么是BNF范式
巴克斯范式（Backus Normal Form，缩写为 BNF）。是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。  
一般可以用来描述编程语言的语法。
使用示例
ALGOL 是一种国际代数编程语言，BNF作者较早的使用BNF定义其语法（作者定义的是algol 58, 但是这个例子是algol 60）：
https://web.archive.org/web/20060925132043/https://www.lrz-muenchen.de/~bernhard/Algol-BNF.html
常用语法
1. 在双引号中的字("word")代表着这些字符本身。而double_quote用来代表双引号。
2. 在双引号外的字（有可能有下划线）代表着语法部分。
3. 尖括号( < > )内包含的为必选项。
4. 方括号( [ ] )内包含的为可选项。
5. 大括号( { } )内包含的为可重复0至无数次的项。
6. 括号 () 表示分组的意思
7. 竖线( | )表示在其左右两边任选一项，相当于"OR"的意思。
8. 加号（+）表示至少为一次
9. 星号（*）表示任意次数
基本结构
<non-terminal>::=<replacement>
1. 非终结符：左边为非终止符，也就是说还没有定义完的东西，需要由右边的可替代符replacement进一步的解释和定义。
2. 终结符： 最终在代码中出现的字符, 例如 "apple"。
3. 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句。
例子
1. <句子> ::= <主语> | <谓语> | <宾语>
2. <主语> ::= <名字> | <代词>
3. <谓语> ::= <动词>
4. <宾语> ::= <形容词> | <名词> | <代词>
右侧也可以置放非终止符，但是左侧绝对不会出现终止符。
进一步的例子：
BNF表示数学中的四则运算：
1. 定义数字：
<Number> ::= "0" | "1" | "2" | "3" | "4" | ... ... | "9"
2. 定义十进制整数
<DecimalNumber> ::= "0" | (("1" | "2" | "3" | "4" | ... ... | "9") <Number> *)
3. 定义加法（注意BNF的递归）
<addExpression> ::= <DecimalNumber> | <addExpression> "+" <DecimalNumber>
4. 定义乘法
<MultiplicativeExpression> ::= <DecimalNumber> | <MultiplicativeExpression> "*" <DecimalNumber>
5. 乘除法
<MultiplicativeExpression> ::= <DecimalNumber> | 
  <MultiplicativeExpression> "*" <DecimalNumber> |
  <MultiplicativeExpression> "/" <DecimalNumber>
6. 加减法
<addExpression> ::= <DecimalNumber> | 
  <addExpression> "+" <DecimalNumber> |
  <addExpression> "-" <DecimalNumber> 
7. 逻辑符
<LogicExpression> ::= <addExpression> | 
  <LogicExpression> "||" <addExpression> |
  <LogicExpression> "&&" <addExpression>
8. 括号(优先级表达式)
<PrimaryExpression> ::= <DecimalNumber> | "("<LogicExpression>")"
观察可以发现，这里不存在逻辑，只关心“长相”。
我感觉Winter这里四则运算的部分和大括号的部分写的不太对，回头贴上自己的版本。
通过BNF产生式进一步了解前面的四种文法，乔姆斯基谱系
无限制文法：
? ::= ?
上下文相关文法
"a"<b>"c" ::= "a""x""c"
// <b>在"a""c"上下文被解释成"x"
上下文无关文法
    <A> :== ?
  // A的定义就是这儿样，和他在哪里没关系。
正则文法
<A> ::= <A>?
终结符如果有递归，只允许出现在左边，左递归。
例子：
1. 下面的get是上下文相关的文法。
{
  get a { return 1 }，
  get: 1
}