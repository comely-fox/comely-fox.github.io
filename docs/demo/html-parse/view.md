---
title: 简单html解析器-预览
prev: false
next: false
sidebar: false
---

<div style="text-align:center"><a href="./">返回</a></div>

### F12 查看

#### 输出结果

<pre style="color: white; background: gray">
{{ result }}
</pre>

<script>
  import {HTMLLexicalParser} from './js/lexer.js'
  import {HTMLSyntaticalParser} from './js/syntaxer.js'
  import html from './html/test.js'


 

  export default {
    data(){
      return {
        result: ''
      }
    },
    mounted() {
      const lexer = new HTMLLexicalParser()
      const syntaxer = new HTMLSyntaticalParser()
      lexer.readHtml(html).output(syntaxer.receiveToken)
      console.log(syntaxer.getDomTree());
      this.result =  JSON.stringify(syntaxer.getDomTree(),null,2)
    }
  }
</script>
