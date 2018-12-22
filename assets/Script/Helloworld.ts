import btn2  from "./btn2"

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
    
    @property(cc.Sprite)
    main_spirte : cc.Sprite = null;

    @property
    flag = true

    @property(cc.Prefab)
    button2 : cc.Prefab = null;

    @property(cc.ScrollView)
    scrollView : cc.ScrollView = null;

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

        //
        let _btn2 = cc.instantiate(this.button2);
        this.node.addChild(_btn2);

        //
        let _btn2_comp = _btn2.getComponent(btn2);
        this.main_spirte.spriteFrame = _btn2_comp.getFrame("hall_area_1");        
        _btn2_comp.startClickLisnter();

        //
        _btn2_comp.btn_self.normalSprite = _btn2_comp.getFrame("hall_room_1_0");
        _btn2_comp.btn_self.hoverSprite = _btn2_comp.getFrame("hall_room_2_2");

        //
        for(let i = 0; i < 2; i++)
        {
            let btntmp = cc.instantiate(this.botton);
            if(btntmp)
            {
                cc.log("instantiate a button.");
                let layout = this.scrollView.content.getChildByName("layout");
                layout.addChild(btntmp);
            }
            else
            cc.error("btntmp is null.");
        }
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
