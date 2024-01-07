//المتغيرات: تستخدم المتغيرات لتعريف القيم التي من الممكن أن تحدث أثناء سير البرنامج مثل: عمر الشخص ودرجة حرارة الغرفة، أي أنها تحتوي على قيمة قابلة للتحديث
//مثال على المتغيرات

let _name = 'mohamed';
console.log(_name)

let _age = 18
console.log(_age)

let _from = 'syria';
console.log(_from)

//الثوابت: تستخدم الثوابت لتعريف القيم التي لن تحدث بعد أن يتم إسنادها، مثل :تاريخ الميلاد وعدد أيام الأسبوع، أي أنها تحتوي على قيمة لن يتم تحديثها
//مثال على الثوابت

let age = 17;
const yearofBirth = 2006;

console.log(yearofBirth);
age = 18;
console.log(age);

//التعليقات: هي اشياء خاصة في المبرمج ما رح يتم تنفيذها
//مثال على التعليقات

console.log("welcome to JavaScript"); //JavaScript

//انواع البيانات
//1: String: يمثل هذا النوع البيانات النصية مثال الشخصيات و النصوص و السلاسل
//2: Number: يمثل هاذا النوع البيانات الرقمية مثل الاعداد الصحيحة و الاعداد ذات النقطة العشرية
//3: Boolean: يمثل هاذا النوع احدى القيمتين اما صح او خطا
//4: null: يدل هذا النوع على عدم وجود قيمة
//5: undefined: يدل هذا النوع على ان القيمة غير معرفة
//ملاحظة الكلمة typeof تطلع نوع البيانات

//مثال على String

let message = 'welcome to JavaScirpt';
console.log(typeof message);
console.log(message);

//مثال على Number

let value = -2.9
console.log(typeof value);
console.log(value);

//مثال على Boolean

let result = 2 < 3;
console.log(typeof result);
console.log(result);

//مثال على null

let vaue;
console.log(vaue);

//طلع لي undefined يعني ان المثال لا يوجد قيمة

//النصوص-string
//نظرة على String Length الامر هاذه يحسب عدد حروف الجملة
//مثال على String Length

let language = "JavaScript";
console.log(language.length);

//دمج النصوص String Concatenation
//مثال على دمج النصوص

let languagE = ' JavaScript';
let messagE = 'Welcome to';
console.log(messagE + languagE)

//Bracket Notation الامر هاذه يوصلك الى العنصر
// مثال على الامر

let Language = 'javaScript';
console.log(Language[4]);

//المصفوفات-arrays
//مثال على تحديث عناصر المصفوفة

let colors = ['red', 'green', 'yellow'];
colors[1] = 'black';
console.log(colors);

//مثال على طول المصفوفة

let cOlors = ['red', 'green', 'blue', 'black'];
console.log(cOlors.length);

//مثال على التحقق من وجود العناصر
//includes الامر هاذه يتحقق من وجود قيمة او عنصر معين ب المصفوفة
let Name = ['mohamed', 'ahmde', 'faisal', 'ayham'];
console.log(Name.includes('mayar'));

//مثال على اضافة عنصر

let cars = ['mercedes', 'sonata', 'camry'];
cars.unshift('hilux');
cars.unshift('accent');
cars.unshift('elantra');
console.log(cars);

//مثال حذف عنصر

Companies = ['Whatsapp', 'Tik Tok', 'Twitter'];
Companies.shift();
console.log(Companies);

//ملاحظة الامر unshift يضيف عنصر لاكن اول المصفوفة اما الامر push يضيف عنصر ب اخر المصفوفة
//pop يحذف اخر عنصر من المصفوفة

//الجمل الشرطية
 
//مثال على جملة if

let Age = 11;
if(Age < 12){
    console.log('Sorry, you are not old enough to play this game.');
}

//مثال على جملة Else

let AGe = 17;
if(AGe < 13){
    console.log('Sorry. you are not old enough to plya this game.');
}else{
    console.log('Welcome to the game');
}

//مثال على جملة Else if

let Number = 0;
if(Number > 0){
    console.log('+');
}else if(Number < 0){
    console.log('-');
}else{
    console.log('zero');
}

//التكرر

// مثال على التكرار for

for(let m = 1; m <= 50; m++){
    console.log(m)
}

//مثال على for loop المصفوفة

const coloRS = ['red', 'green', 'blue', 'black'];
for(let i = 0; i < coloRS.length; i++){
    console.log(coloRS[i]);
}

//مثال على for of  مع النصوص

const messag = 'Welcome to JavaScript';
for(let character of messag){
    console.log(character);
}

//الدوال 

//مثال على الدالة functions

function printNumbers(){
    console.log(1);
    console.log(2);
    console.log(3);
}
printNumbers();

//استدعاء الدالة

function printnumbers(){
    console.log(1);
    console.log(2);
    console.log(3);
}
printnumbers();
printnumbers();
printnumbers();

//هاذه مشروعي و ان شا الله يعجبكم و السلام عليكم ورحمة الله و براكاته