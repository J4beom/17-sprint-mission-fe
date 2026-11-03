// 여기에 작성해야 하는 것
// - import 사용하기
// - 각 함수를 실행하는 코드를 작성, 제대로 동작하는지 확인

import * as article from './ArticleService.js';
import * as product from './ProductService.js';

// Article Test
// console.log(await article.getArticle());
// console.log(await article.getArticleList({page: 1, pageSize: 5, keyword: '코드잇'}));
// console.log(await article.createArticle({
//     title: '김승범 테스트입니다',
//     content: '테스트로 보내보는 createArticle',
//     image: 'https://example.com/...',
// }));
// console.log(await article.patchArticle(7353, {
//     title: '김승범 테스트입니다 수정본',
//     content: '테스트로 보내보는 createArticle 수정 최최최종',
//     image: 'https://example.com/...',
// }));
// console.log(await article.deleteArticle(7353));


// Product Test
// console.log(await product.getProduct());
// console.log(await product.getProductList({page: 1, pageSize: 5, keyword: '자전거'}));
// console.log(await product.createProduct({
//     name: '아이폰 15',
//     description: '아이폰 15입니다.',
//     price: 500000,
//     tags: ['아이폰', '중고폰'],
//     images: ['https://example.com/...']
// }));
// console.log(await product.patchProduct(4602, {
//     name: '아이폰 14',
//     description: '아이폰 14입니다.',
//     price: 300000,
//     tags: ['아이폰', '중고폰'],
//     images: ['https://example.com/...']
// }));
// console.log(await product.deleteProduct(4602));