---
title: pages list
sidebar: false
---

<div>
<ol id="pages" >
  <li v-for="(item, index) in pages" :key="index">
    <a href="javascript:" @click.prevent="to(item.link)">{{item.text}}</a>
  </li>
</ol>
</div>

<script>

export default {
  data() {
    return {
        pages: [
        { 
          text: '华为商城-自适应',
          link: '/pages/like-hw/',
        },
        { 
          text: '慕课企业网',
          link: '/pages/moc/',
        },
        { 
          text: '统一挂号平台',
          link: '/pages/hospital/',
        },
        { 
          text: '旅游网',
          link: '/pages/travel/',
        },
        { 
          text: '阿里云-用户中心',
          link: '/pages/aliyun/user.center.html',
        },
        { 
          text: '阿里云-控制台',
          link: '/pages/aliyun/home.console.html',
        }
      ]
    }
  },
  methods: {
    to(url){
      console.log(url)
      location.href = url
    }
  },
  mounted(){
    console.log(location.href.search)
  }
}

</script>
