# pixiJs
## 通常Pixi给你三种方式从已经加载的纹理贴图集中创建精灵：

- 雪碧图提取图片，通过<a href="https://www.codeandweb.com/texturepacker" target="_blank">TexturePacker</a>制作

1. 使用 TextureCache:（拿到雪碧图中的一个精灵）
```js
    let texture = TextureCache["door.png"],
        sprite = new Sprite(texture);
```

2. 如果你是使用的 loader来加载纹理贴图集, 使用loader的 resources:（拿到整个集合，取其中一个）
```js
    let sprite = new Sprite(
        resources["images/treasureHunter.json"].textures["door.png"]
    );
```

3. （这是上面2的简化写法）要创建一个精灵需要输入太多东西了! 所以我建议你给纹理贴图集的textures对象创建一个叫做id的别名，象是这样：
```js
    let id = PIXI.loader.resources["images/treasureHunter.json"].textures;
```

现在你就可以像这样实例化一个精灵了：
```js
    let sprite = new Sprite(id["door.png"]);
```



## 获取位置
animals是一个Container容器  
1. 获取绝对位置  
```js
// 方法1
animals.toGlobal(cat.position)  

// 方法2
cat.parent.toGlobal(cat.position);  

// 方法3
cat.getGlobalPosition().x
cat.getGlobalPosition().y
```
2. 获取相对位置  
```js
// sprite.toLocal(sprite.position, anyOtherSprite)
cat.toLocal(cat.position, explorer) // {x: -132, y: 40}
```