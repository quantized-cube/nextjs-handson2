import { Search } from '@/lib/component/Search';
import { getRandomPhotos } from '@/lib/unsplash';

const Home = async () => {
  const randomPhotos = await getRandomPhotos();
  return (
    <div>
      <Search randomPhotos={randomPhotos}></Search>
    </div>
  )
}

export default Home;
