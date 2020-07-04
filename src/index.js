import Post from '@models/Post';
import './styles/styles.css';
import json from './assets/json';
import WebpackLogo from '@/assets/webpack.png'

const post = new Post('Webpack', WebpackLogo);

console.log("post to string", post.toString());
console.log('JSON:', json);