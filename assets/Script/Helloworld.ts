const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Prefab)
    botton : cc.Prefab = null;

    @property
    text: string = 'hello';

    @property(cc.Sprite)
    sprite : cc.Sprite = null;
    
    @property(cc.SpriteAtlas)
    atlas : cc.SpriteAtlas = null;
    
    @property
    flag = true

    start () {
        // init logic
        // 设置标签的内容
        this.label.string = "hello world";

        // 实例化预制资源，并添加至节点
        let btn = cc.instantiate(this.botton);
        //btn.active = false;
        this.node.addChild(btn);

        // 设置监听事件
        btn.on(cc.Node.EventType.TOUCH_END, this.btn_callback.bind(this));

        //
        let frame = this.atlas.getSpriteFrame("hall_area_1");
        if(frame)
            this.sprite.spriteFrame = frame;
        else
            cc.error("frame is null.");
    }

    //
   btn_callback(event){
       cc.log(event.type) 
       if(this.flag)
       {
           this.flag = !this.flag;
           this.sprite.spriteFrame = this.atlas.getSpriteFrame("hall_area_2");
       }
       else{
           this.flag = !this.flag;
           this.sprite.spriteFrame = this.atlas.getSpriteFrame("hall_area_1");
       }
   }
}
