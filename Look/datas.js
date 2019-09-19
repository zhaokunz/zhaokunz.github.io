Vue.component('lee',{
    template:`
        <div id="text">
            <table class="table" style="height:370px;">
                <tr style="height:40px;text-align:center;">
                    <td v-for="(item, index) in arr[0]">
                        <a :href="item.url">{{item.name}}</a>
                    </td>
                </tr>

                <tr></tr>
            </table>
        </div>
    `,
    data(){
        return{
            arr:[
                [
                    {
                        name:'9-4轮播图',
                        url:'Look/9-4/轮播图.html',
                    },
                    {
                        name:'9-4三级导航',
                        url:'Look/9-4/三级导航.html',
                    },
                    {
                        name:'9-5webpack配置',
                        url:'Look/9-5/app/dist/index.html',
                    },
                    {
                        name:'9-8协会网站',
                        url:'Look/9-8/app/dist/index.html',
                    },
                    {
                        name:'9-10生态网站',
                        url:'Look/9-10/app/dist/index.html',
                    },
                    {
                        name:'9-18皮皮虾',
                        url:'Look/9-18/app/dist/index.html',
                    },
                    {
                        name:'9-20vuex',
                        url:'Look/9-20/app/dist/index.html',
                    }
                ]
            ]
        }
    }
})
new Vue({
    el: '#box',
    data:{
        drawer: false,
        direction: 'ttb',
    },
    methods: {
        add() {
            this.drawer = true;
        },
        handleClose(done) {
            console.log(3)
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }
})