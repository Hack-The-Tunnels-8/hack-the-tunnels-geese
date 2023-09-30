import axios from 'axios';
import cheerio from 'cheerio';
import { create } from '../../services/Product';

const scrapeAmazonProduct = async (url: string) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const title = $('#productTitle').text().trim();
    const priceString = $('#priceblock_ourprice').text().trim();
    const price = parseFloat(priceString.replace('$', '').replace(',', ''));

    const description = $('#feature-bullets ul li span').text().trim();

    const imageUrl = $('#landingImage').attr('src');

    const newProduct = await create(title, description, price, imageUrl);

    console.log('Product created:', newProduct);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default scrapeAmazonProduct;