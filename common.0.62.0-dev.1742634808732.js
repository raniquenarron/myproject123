"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2076],{658587:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{conf:()=>conf,language:()=>language});var conf={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*#pragma\\s+region\\b"),end:new RegExp("^\\s*#pragma\\s+endregion\\b")}}};var language={defaultToken:"",tokenPostfix:".cpp",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.angle",open:"<",close:">"}],keywords:["abstract","amp","array","auto","bool","break","case","catch","char","class","const","constexpr","const_cast","continue","cpu","decltype","default","delegate","delete","do","double","dynamic_cast","each","else","enum","event","explicit","export","extern","false","final","finally","float","for","friend","gcnew","generic","goto","if","in","initonly","inline","int","interface","interior_ptr","internal","literal","long","mutable","namespace","new","noexcept","nullptr","__nullptr","operator","override","partial","pascal","pin_ptr","private","property","protected","public","ref","register","reinterpret_cast","restrict","return","safe_cast","sealed","short","signed","sizeof","static","static_assert","static_cast","struct","switch","template","this","thread_local","throw","tile_static","true","try","typedef","typeid","typename","union","unsigned","using","virtual","void","volatile","wchar_t","where","while","_asm","_based","_cdecl","_declspec","_fastcall","_if_exists","_if_not_exists","_inline","_multiple_inheritance","_pascal","_single_inheritance","_stdcall","_virtual_inheritance","_w64","__abstract","__alignof","__asm","__assume","__based","__box","__builtin_alignof","__cdecl","__clrcall","__declspec","__delegate","__event","__except","__fastcall","__finally","__forceinline","__gc","__hook","__identifier","__if_exists","__if_not_exists","__inline","__int128","__int16","__int32","__int64","__int8","__interface","__leave","__m128","__m128d","__m128i","__m256","__m256d","__m256i","__m512","__m512d","__m512i","__m64","__multiple_inheritance","__newslot","__nogc","__noop","__nounwind","__novtordisp","__pascal","__pin","__pragma","__property","__ptr32","__ptr64","__raise","__restrict","__resume","__sealed","__single_inheritance","__stdcall","__super","__thiscall","__try","__try_cast","__typeof","__unaligned","__unhook","__uuidof","__value","__virtual_inheritance","__w64","__wchar_t"],operators:["=",">","<","!","~","?",":","==","<=",">=","!=","&&","||","++","--","+","-","*","/","&","|","^","%","<<",">>",">>>","+=","-=","*=","/=","&=","|=","^=","%=","<<=",">>=",">>>="],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[0abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,integersuffix:/([uU](ll|LL|l|L)|(ll|LL|l|L)?[uU]?)/,floatsuffix:/[fFlL]?/,encoding:/u|u8|U|L/,tokenizer:{root:[[/@encoding?R\"(?:([^ ()\\\t]*))\(/,{token:"string.raw.begin",next:"@raw.$1"}],[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],[/^\s*#\s*include/,{token:"keyword.directive.include",next:"@include"}],[/^\s*#\s*\w+/,"keyword.directive"],{include:"@whitespace"},[/\[\s*\[/,{token:"annotation",next:"@annotation"}],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@doccomment"],[/\/\*/,"comment","@comment"],[/\/\/.*\\$/,"comment","@linecomment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],linecomment:[[/.*[^\\]$/,"comment","@pop"],[/[^]+/,"comment"]],doccomment:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],raw:[[/(.*)(\))(?:([^ ()\\\t"]*))(\")/,{cases:{"$3==$S2":["string.raw","string.raw.end","string.raw.end",{token:"string.raw.end",next:"@pop"}],"@default":["string.raw","string.raw","string.raw","string.raw"]}}],[/.*/,"string.raw"]],annotation:[{include:"@whitespace"},[/using|alignas/,"keyword"],[/[a-zA-Z0-9_]+/,"annotation"],[/[,:]/,"delimiter"],[/[()]/,"@brackets"],[/\]\s*\]/,{token:"annotation",next:"@pop"}]],include:[[/(\s*)(<)([^<>]*)(>)/,["","keyword.directive.include.begin","string.include.identifier",{token:"keyword.directive.include.end",next:"@pop"}]],[/(\s*)(")([^"]*)(")/,["","keyword.directive.include.begin","string.include.identifier",{token:"keyword.directive.include.end",next:"@pop"}]]]}}},286215:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{conf:()=>conf,language:()=>language});var conf={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"],["begin","end"],["case","endcase"],["casex","endcase"],["casez","endcase"],["checker","endchecker"],["class","endclass"],["clocking","endclocking"],["config","endconfig"],["function","endfunction"],["generate","endgenerate"],["group","endgroup"],["interface","endinterface"],["module","endmodule"],["package","endpackage"],["primitive","endprimitive"],["program","endprogram"],["property","endproperty"],["specify","endspecify"],["sequence","endsequence"],["table","endtable"],["task","endtask"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{offSide:false,markers:{start:new RegExp("^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|case(x|z)?|class|clocking|config|covergroup|function|generate|interface|module|package|primitive|property|program|sequence|specify|table|task)\\b"),end:new RegExp("^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endcase|endclass|endclocking|endconfig|endgroup|endfunction|endgenerate|endinterface|endmodule|endpackage|endprimitive|endproperty|endprogram|endsequence|endspecify|endtable|endtask)\\b")}}};var language={defaultToken:"",tokenPostfix:".sv",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.angle",open:"<",close:">"}],keywords:["accept_on","alias","always","always_comb","always_ff","always_latch","and","assert","assign","assume","automatic","before","begin","bind","bins","binsof","bit","break","buf","bufif0","bufif1","byte","case","casex","casez","cell","chandle","checker","class","clocking","cmos","config","const","constraint","context","continue","cover","covergroup","coverpoint","cross","deassign","default","defparam","design","disable","dist","do","edge","else","end","endcase","endchecker","endclass","endclocking","endconfig","endfunction","endgenerate","endgroup","endinterface","endmodule","endpackage","endprimitive","endprogram","endproperty","endspecify","endsequence","endtable","endtask","enum","event","eventually","expect","export","extends","extern","final","first_match","for","force","foreach","forever","fork","forkjoin","function","generate","genvar","global","highz0","highz1","if","iff","ifnone","ignore_bins","illegal_bins","implements","implies","import","incdir","include","initial","inout","input","inside","instance","int","integer","interconnect","interface","intersect","join","join_any","join_none","large","let","liblist","library","local","localparam","logic","longint","macromodule","matches","medium","modport","module","nand","negedge","nettype","new","nexttime","nmos","nor","noshowcancelled","not","notif0","notif1","null","or","output","package","packed","parameter","pmos","posedge","primitive","priority","program","property","protected","pull0","pull1","pulldown","pullup","pulsestyle_ondetect","pulsestyle_onevent","pure","rand","randc","randcase","randsequence","rcmos","real","realtime","ref","reg","reject_on","release","repeat","restrict","return","rnmos","rpmos","rtran","rtranif0","rtranif1","s_always","s_eventually","s_nexttime","s_until","s_until_with","scalared","sequence","shortint","shortreal","showcancelled","signed","small","soft","solve","specify","specparam","static","string","strong","strong0","strong1","struct","super","supply0","supply1","sync_accept_on","sync_reject_on","table","tagged","task","this","throughout","time","timeprecision","timeunit","tran","tranif0","tranif1","tri","tri0","tri1","triand","trior","trireg","type","typedef","union","unique","unique0","unsigned","until","until_with","untyped","use","uwire","var","vectored","virtual","void","wait","wait_order","wand","weak","weak0","weak1","while","wildcard","wire","with","within","wor","xnor","xor"],builtin_gates:["and","nand","nor","or","xor","xnor","buf","not","bufif0","bufif1","notif1","notif0","cmos","nmos","pmos","rcmos","rnmos","rpmos","tran","tranif1","tranif0","rtran","rtranif1","rtranif0"],operators:["=","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>+","<<<=",">>>=","?",":","+","-","!","~","&","~&","|","~|","^","~^","^~","+","-","*","/","%","==","!=","===","!==","==?","!=?","&&","||","**","<","<=",">",">=","&","|","^",">>","<<",">>>","<<<","++","--","->","<->","inside","dist","::","+:","-:","*>","&&&","|->","|=>","#=#"],symbols:/[=><!~?:&|+\-*\/\^%#]+/,escapes:/%%|\\(?:[antvf\\"']|x[0-9A-Fa-f]{1,2}|[0-7]{1,3})/,identifier:/(?:[a-zA-Z_][a-zA-Z0-9_$\.]*|\\\S+ )/,systemcall:/[$][a-zA-Z0-9_]+/,timeunits:/s|ms|us|ns|ps|fs/,tokenizer:{root:[[/^(\s*)(@identifier)/,["",{cases:{"@builtin_gates":{token:"keyword.$2",next:"@module_instance"},table:{token:"keyword.$2",next:"@table"},"@keywords":{token:"keyword.$2"},"@default":{token:"identifier",next:"@module_instance"}}}]],[/^\s*`include/,{token:"keyword.directive.include",next:"@include"}],[/^\s*`\s*\w+/,"keyword"],{include:"@identifier_or_keyword"},{include:"@whitespace"},[/\(\*.*\*\)/,"annotation"],[/@systemcall/,"variable.predefined"],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],{include:"@numbers"},[/[;,.]/,"delimiter"],{include:"@strings"}],identifier_or_keyword:[[/@identifier/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}]],numbers:[[/\d+?[\d_]*(?:\.[\d_]+)?[eE][\-+]?\d+/,"number.float"],[/\d+?[\d_]*\.[\d_]+(?:\s*@timeunits)?/,"number.float"],[/(?:\d+?[\d_]*\s*)?'[sS]?[dD]\s*[0-9xXzZ?]+?[0-9xXzZ?_]*/,"number"],[/(?:\d+?[\d_]*\s*)?'[sS]?[bB]\s*[0-1xXzZ?]+?[0-1xXzZ?_]*/,"number.binary"],[/(?:\d+?[\d_]*\s*)?'[sS]?[oO]\s*[0-7xXzZ?]+?[0-7xXzZ?_]*/,"number.octal"],[/(?:\d+?[\d_]*\s*)?'[sS]?[hH]\s*[0-9a-fA-FxXzZ?]+?[0-9a-fA-FxXzZ?_]*/,"number.hex"],[/1step/,"number"],[/[\dxXzZ]+?[\dxXzZ_]*(?:\s*@timeunits)?/,"number"],[/'[01xXzZ]+/,"number"]],module_instance:[{include:"@whitespace"},[/(#?)(\()/,["",{token:"@brackets",next:"@port_connection"}]],[/@identifier\s*[;={}\[\],]/,{token:"@rematch",next:"@pop"}],[/@symbols|[;={}\[\],]/,{token:"@rematch",next:"@pop"}],[/@identifier/,"type"],[/;/,"delimiter","@pop"]],port_connection:[{include:"@identifier_or_keyword"},{include:"@whitespace"},[/@systemcall/,"variable.predefined"],{include:"@numbers"},{include:"@strings"},[/[,]/,"delimiter"],[/\(/,"@brackets","@port_connection"],[/\)/,"@brackets","@pop"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],strings:[[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],include:[[/(\s*)(")([\w*\/*]*)(.\w*)(")/,["","string.include.identifier","string.include.identifier","string.include.identifier",{token:"string.include.identifier",next:"@pop"}]],[/(\s*)(<)([\w*\/*]*)(.\w*)(>)/,["","string.include.identifier","string.include.identifier","string.include.identifier",{token:"string.include.identifier",next:"@pop"}]]],table:[{include:"@whitespace"},[/[()]/,"@brackets"],[/[:;]/,"delimiter"],[/[01\-*?xXbBrRfFpPnN]/,"variable.predefined"],["endtable","keyword.endtable","@pop"]]}}},576863:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{conf:()=>conf,language:()=>language});var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(146299);var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __hasOwnProp=Object.prototype.hasOwnProperty;var __copyProps=(to,from,except,desc)=>{if(from&&typeof from==="object"||typeof from==="function"){for(let key of __getOwnPropNames(from))if(!__hasOwnProp.call(to,key)&&key!==except)__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable})}return to};var __reExport=(target,mod,secondTarget)=>(__copyProps(target,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default"));var monaco_editor_core_exports={};__reExport(monaco_editor_core_exports,_editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);var conf={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:monaco_editor_core_exports.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:monaco_editor_core_exports.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:monaco_editor_core_exports.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:monaco_editor_core_exports.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}};var language={defaultToken:"invalid",tokenPostfix:".ts",keywords:["abstract","any","as","asserts","bigint","boolean","break","case","catch","class","continue","const","constructor","debugger","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","infer","instanceof","interface","is","keyof","let","module","namespace","never","new","null","number","object","out","package","private","protected","public","override","readonly","require","global","return","satisfies","set","static","string","super","switch","symbol","this","throw","true","try","type","typeof","undefined","unique","unknown","var","void","while","with","yield","async","await","of"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","<<","</",">>",">>>","&","|","^","!","~","&&","||","??","?",":","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=","@"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,regexpctl:/[(){}\[\]\$\^|\-*+?\.]/,regexpesc:/\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/#?[a-z_$][\w$]*/,{cases:{"@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/\/(?=([^\\\/]|\\.)+\/([dgimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,{token:"regexp",bracket:"@open",next:"@regexp"}],[/[()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/(@digits)[eE]([\-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/,"number.float"],[/0[xX](@hexdigits)n?/,"number.hex"],[/0[oO]?(@octaldigits)n?/,"number.octal"],[/0[bB](@binarydigits)n?/,"number.binary"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],jsdoc:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],regexp:[[/(\{)(\d+(?:,\d*)?)(\})/,["regexp.escape.control","regexp.escape.control","regexp.escape.control"]],[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,["regexp.escape.control",{token:"regexp.escape.control",next:"@regexrange"}]],[/(\()(\?:|\?=|\?!)/,["regexp.escape.control","regexp.escape.control"]],[/[()]/,"regexp.escape.control"],[/@regexpctl/,"regexp.escape.control"],[/[^\\\/]/,"regexp"],[/@regexpesc/,"regexp.escape"],[/\\\./,"regexp.invalid"],[/(\/)([dgimsuy]*)/,[{token:"regexp",bracket:"@close",next:"@pop"},"keyword.other"]]],regexrange:[[/-/,"regexp.escape.control"],[/\^/,"regexp.invalid"],[/@regexpesc/,"regexp.escape"],[/[^\]]/,"regexp"],[/\]/,{token:"regexp.escape.control",next:"@pop",bracket:"@close"}]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}}}}]);
//# sourceMappingURL=common.0.62.0-dev.1742634808732.js.map