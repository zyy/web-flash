(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{228:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"初始化数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化数据"}},[t._v("#")]),t._v(" 初始化数据")]),t._v(" "),a("p",[t._v("本系统使用mysql数据库")]),t._v(" "),a("ul",[a("li",[t._v("在mysql中创建数据库 web-flash"),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("flash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("charset")]),t._v(" utf8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLLATE")]),t._v(" utf8_general_ci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("启动项目的时候会自动创建数据库并初始化系统数据，所以无需自己初始化数据")]),t._v(" "),a("li",[t._v("本系统通过Spring Boot的配置：spring.jpa.hibernate.ddl-auto=create 来初始化数据库，建议在生产环境中去掉该配置以避免将关键业务数据删除掉。")]),t._v(" "),a("li",[t._v("初始化语句为:src/main/resources/import.sql，当配置spring.jpa.hibernate.ddl-auto=create的时候，系统启动会自动执行该语句初始化测试数据。")]),t._v(" "),a("li",[t._v("如果你是个传统的人；就是想要数据库文件，用传统的方式初始化数据库，点击这里"),a("a",{attrs:{href:"https://gitee.com/enilu/web-flash/blob/master/docs/web-flash.sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("database.sql"),a("OutboundLink")],1),t._v("，强烈不建议使用这种方式，因为本人可能不是那么及时的更新这个文件导致一些问题。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);