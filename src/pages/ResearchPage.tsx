import { Container } from '../components';
import { PageContainer } from '../components/Layout';
// import { ResearchList } from '../components/Research/ResearchList';
// import clubConfig from '../data/clubConfig.json';

// const researches = clubConfig.portfolio.research;

export const ResearchPage = () => {
  return (
    <PageContainer>
      <div id="projects">
        <Container>
          <div className="space-y-8">
            <div className="mt-8 space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Publications</h2>
              <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                Learn about our academic research
              </p>
              <br/>
              <ul>
              <li>
                <h3 className="font-bold"><a href="https://www.sciencedirect.com/science/article/pii/S2667318522000150">Recent advances and application of generative adversarial networks in drug discovery, development, and targeting</a></h3>
                <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                Tripathi, S., Augustin, A. I., Sukumaran, R., Dheer, S., & Kim, E. (2022). HematoNet: expert level classification of bone marrow cytology morphology in hematological malignancy with deep learning. Artificial Intelligence in the Life Sciences, 2, 100043.
              </p></li><br/>
                <li>
                <h3 className="font-bold"><a href="https://www.sciencedirect.com/science/article/pii/S235291482200199X">RadGenNets: Deep learning-based radiogenomics model for gene mutation prediction in lung cancer</a></h3>
                <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                Tripathi, S., Moyer, E. J., Augustin, A. I., Zavalny, A., Dheer, S., Sukumaran, R., ... & Kim, E. (2022). Radgennets: Deep learning-based radiogenomics model for gene mutation prediction in lung cancer. Informatics in Medicine Unlocked, 33, 101062.
              </p></li>
              <br/>
              <li>
                <h3 className="font-bold"><a href="https://ieeexplore.ieee.org/abstract/document/9533483">Towards Searching Efficient and Accurate Neural Network Architectures in Binary Classification Problems</a></h3>
                <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                Alparslan, Y., Moyer, E. J., Isozaki, I. M., Schwartz, D., Dunlop, A., Dave, S., & Kim, E. (2021, July). Towards searching efficient and accurate neural network architectures in binary classification problems. In 2021 International Joint Conference on Neural Networks (IJCNN) (pp. 1-8). IEEE.
              </p></li>
              <br/>
              <li>
                <h3 className="font-bold"><a href="https://arxiv.org/abs/2103.01121">Extreme volatility prediction in stock market: When gamestop meets long short-term memory networks</a></h3>
                <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                Alparslan, Yigit, and Edward Kim. "Extreme volatility prediction in stock market: When gamestop meets long short-term memory networks." arXiv preprint arXiv:2103.01121 (2021).
              </p></li>

              </ul>
            </div>
          </div>
        </Container>
      </div>
    </PageContainer>
  );
};
