/**
 * 图片相关配置
 *
 * eg: images.unsplash.com(notion图床的所有图片都会替换),如果你在 notion 里已经添加了一个随机图片 url，恰巧那个服务跑路或者挂掉，想一键切换所有配图可以将该 url 配置在这里
 * 默认下会将你上传到 notion的主页封面图和头像也给替换，建议将主页封面图和头像放在其他图床，在 notion 里配置 link 即可。
 */
module.exports = {
  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', 
  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 1080,
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1920,
  IMAGE_COMPRESS_QUALITY: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_QUALITY || 80,

  // ✅ 替换掉 Unsplash 的默认图
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || 'https://www.notion.so/image/attachment%3A969ebb70-558a-4715-ae43-a445f094c72c%3A%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250914213954.png?table=block&id=26e1ae78-e78f-80b8-b118-de652cb20591&spaceId=0bcd4b4c-a149-4887-8949-f52af8b9cda7&width=2000&userId=fa98683a-e081-4060-bba1-23dbe487b80c&cache=v2',
  RANDOM_IMAGE_REPLACE_TEXT: process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT || 'images.unsplash.com',

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion',
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false,
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800
}

