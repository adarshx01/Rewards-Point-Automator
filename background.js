let searchQueries = [
    ("What are the latest advancements in artificial intelligence and machine learning for healthcare applications, and how are they being implemented to improve patient care and diagnostics in modern hospitals and clinics around the world?"),
    ("How are renewable energy sources like solar, wind, and hydroelectric power being integrated into the energy grids of different countries, and what are the economic and environmental impacts of these transitions?"),
    ("What are the key differences between various programming languages like Python, JavaScript, Java, and C++, and in what scenarios or industries is each language predominantly used in the current technology landscape?"),
    ("What are the latest trends in cybersecurity, including new types of cyber threats and the most effective strategies for protecting personal and organizational data from breaches and attacks?"),
    ("How is blockchain technology being used beyond cryptocurrency, and what are some innovative applications of blockchain in industries such as finance, supply chain management, and healthcare?"),
    ("What are the most recent developments in autonomous vehicle technology, including advancements in sensors, artificial intelligence, and regulatory challenges faced by companies in this field?"),
    ("How are big data and data analytics being utilized by companies to gain insights into customer behavior, optimize operations, and drive business growth across different sectors?"),
    ("What are the environmental and social impacts of fast fashion, and how are sustainable fashion brands and initiatives addressing these issues to promote more ethical consumer behavior?"),
    ("How are virtual reality (VR) and augmented reality (AR) technologies being used in fields such as education, training, entertainment, and remote work to create immersive experiences?"),
    ("What are the key factors contributing to the rise of electric vehicles (EVs), and how are governments and private companies incentivizing the adoption of EVs to reduce carbon emissions?"),
    ("How has the COVID-19 pandemic influenced the landscape of remote work, and what are the long-term implications for businesses, employees, and urban planning?"),
    ("What are the health benefits and potential risks associated with the increasing popularity of plant-based diets, and how can individuals ensure they are meeting their nutritional needs?"),
    ("What are the latest innovations in space exploration, including recent missions by NASA, SpaceX, and other space agencies, and what are the long-term goals for human space travel and colonization?"),
    ("How is artificial intelligence being used to enhance the capabilities of smart home devices, and what are the potential privacy and security concerns associated with these technologies?"),
    ("What are the economic and social impacts of the gig economy, and how are gig workers advocating for better working conditions and benefits in different countries?"),
    ("How is biotechnology advancing the field of agriculture, including the development of genetically modified crops, precision farming techniques, and sustainable farming practices?"),
    ("What are the most effective strategies for personal finance management, including budgeting, investing, and saving for retirement, and how can individuals achieve financial literacy?"),
    ("How are smart cities being developed to improve urban living, including the use of IoT devices, data analytics, and sustainable infrastructure to enhance quality of life for residents?"),
    ("What are the latest trends in the gaming industry, including the rise of eSports, the impact of virtual reality, and the evolution of game development technologies?"),
    ("What are the benefits and challenges of implementing artificial intelligence in customer service, including the use of chatbots and virtual assistants to improve customer experience?"),
    ("How is climate change affecting global ecosystems, and what are some innovative solutions being developed to mitigate its impact on the environment and human societies?"),
    ("What are the latest advancements in wearable technology, and how are these devices being used to monitor health, enhance fitness, and improve overall well-being?"),
    ("How are social media platforms influencing public opinion and political discourse, and what measures are being taken to address issues like misinformation and online harassment?"),
    ("What are the key principles of effective project management, including methodologies like Agile and Scrum, and how can project managers successfully lead teams to achieve their goals?"),
    ("How are advancements in genetics and genomics revolutionizing personalized medicine, and what are the ethical considerations associated with genetic testing and therapy?"),
    ("What are the environmental and health impacts of plastic pollution, and how are governments, organizations, and individuals working to reduce plastic waste and promote recycling?"),
    ("How is 3D printing technology being used in various industries, including healthcare, manufacturing, and construction, to create innovative solutions and improve efficiency?"),
    ("What are the benefits and potential risks of cloud computing for businesses, and how can organizations ensure the security and reliability of their cloud-based systems?"),
    ("How are advancements in quantum computing expected to transform industries such as cryptography, material science, and artificial intelligence in the coming years?"),
    ("What are the latest trends in renewable energy storage, including advancements in battery technology and other innovative solutions for storing and distributing clean energy?"),
    ("How is telemedicine changing the healthcare landscape, including the benefits and challenges of remote consultations and digital health platforms for patients and providers?"),
    ("What are the key components of a successful digital marketing strategy, including the use of SEO, social media, content marketing, and data analytics to reach target audiences?"),
    ("How are advancements in nanotechnology being applied in fields such as medicine, electronics, and materials science to create new products and solutions?"),
    ("What are the most effective strategies for managing mental health and well-being in the workplace, and how can employers support their employees' mental health needs?"),
    ("How are advancements in artificial intelligence and robotics transforming the manufacturing industry, including the use of automation and smart factories to improve efficiency and productivity?"),
    ("What are the key factors driving the growth of the Internet of Things (IoT), and how are IoT devices being used to create smart homes, cities, and industries?"),
    ("How is the rise of remote and hybrid work models affecting corporate culture, employee engagement, and productivity, and what strategies can organizations use to adapt?"),
    ("What are the latest trends in digital transformation, and how are businesses leveraging technology to innovate, improve efficiency, and enhance customer experiences?"),
    ("How are advancements in artificial intelligence being used to improve cybersecurity, including the use of machine learning and predictive analytics to detect and prevent cyber threats?"),
    ("What are the environmental and economic benefits of sustainable building practices, including the use of green materials, energy-efficient designs, and renewable energy sources?"),
    ("How are advancements in biotechnology and bioengineering being used to develop new treatments and therapies for diseases, and what are the ethical considerations involved?"),
    ("How are artificial intelligence and machine learning being utilized in the financial sector to enhance fraud detection, automate trading, and provide personalized banking services to customers?"),
    ("What are the latest advancements in drone technology, and how are drones being used in industries such as agriculture, delivery services, disaster management, and environmental monitoring?"),
    ("How are digital twins being used in various industries to create virtual replicas of physical assets, systems, and processes for improved monitoring, simulation, and optimization?"),
    ("What are the most effective strategies for achieving work-life balance, and how can individuals and organizations implement practices that promote mental health and well-being?"),
    ("How are advancements in biotechnology contributing to the development of sustainable biofuels, and what are the potential benefits and challenges of using biofuels as an alternative energy source?"),
    ("What are the latest trends in the Internet of Things (IoT), and how are IoT devices being used to create connected homes, smart cities, and innovative industrial solutions?"),
    ("How are advancements in artificial intelligence and robotics transforming the field of logistics and supply chain management, including the use of autonomous vehicles and smart warehouses?"),
    ("What are the key factors driving the growth of e-commerce, and how are online retailers using technology to enhance the customer shopping experience and improve operational efficiency?"),
    ("How is the rise of digital currencies and blockchain technology impacting the traditional financial system, and what are the potential benefits and risks of widespread cryptocurrency adoption?"),
    ("What are the most effective strategies for addressing climate change, and how are governments, businesses, and individuals working together to reduce greenhouse gas emissions and promote sustainability?"),
    ("How are advancements in gene editing technologies, such as CRISPR, being used to treat genetic disorders and improve agricultural productivity, and what are the ethical considerations involved?"),
    ("What are the latest developments in wearable health technology, and how are devices like smartwatches and fitness trackers being used to monitor health metrics and improve wellness?"),
    ("How are advancements in artificial intelligence being used to create more sophisticated and human-like virtual assistants, and what are the potential benefits and challenges of these technologies?"),
    ("What are the key principles of sustainable agriculture, and how are farmers and agricultural organizations implementing practices that promote environmental health and food security?"),
    ("How are advancements in renewable energy technologies, such as solar and wind power, driving the transition to a more sustainable energy future, and what are the economic implications?"),
    ("What are the most effective strategies for reducing plastic pollution in the oceans, and how are organizations and individuals working to clean up marine environments and protect marine life?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve educational outcomes, including personalized learning and adaptive testing systems?"),
    ("What are the latest trends in telecommunication technology, including the rollout of 5G networks, and how are these advancements expected to impact communication and connectivity?"),
    ("How are advancements in artificial intelligence being used to enhance the capabilities of autonomous robots, and what are the potential applications and ethical considerations of these technologies?"),
    ("What are the key factors driving the adoption of electric vehicles, and how are advancements in battery technology and charging infrastructure contributing to their growth?"),
    ("How are advancements in artificial intelligence being used to improve healthcare outcomes, including the development of predictive analytics tools and personalized treatment plans?"),
    ("What are the most effective strategies for promoting sustainable tourism, and how are destinations and travelers working to minimize the environmental impact of tourism?"),
    ("How are advancements in artificial intelligence and machine learning being used to enhance the capabilities of financial services, including fraud detection, algorithmic trading, and customer service?"),
    ("What are the latest developments in the field of nanotechnology, and how are nanomaterials being used to create new products and solutions in industries such as medicine, electronics, and energy?"),
    ("How are advancements in artificial intelligence being used to improve transportation systems, including the development of smart traffic management systems and autonomous vehicles?"),
    ("What are the key factors driving the growth of renewable energy, and how are advancements in technology and policy initiatives contributing to the transition to a sustainable energy future?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the efficiency and effectiveness of marketing campaigns, including the use of predictive analytics and personalized content?"),
    ("What are the most effective strategies for managing waste and promoting recycling, and how are governments, businesses, and individuals working to reduce waste and promote sustainability?"),
    ("How are advancements in artificial intelligence being used to improve the capabilities of virtual reality and augmented reality technologies, and what are the potential applications of these technologies?"),
    ("What are the key principles of effective leadership, and how can leaders develop the skills and strategies needed to inspire and motivate their teams to achieve organizational goals?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of cybersecurity systems, including the detection and prevention of cyber threats?"),
    ("What are the latest trends in the field of artificial intelligence, and how are AI technologies being used to create innovative solutions and improve efficiency in various industries?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of smart home devices, including voice assistants, security systems, and energy management solutions?"),
    ("What are the most effective strategies for promoting diversity and inclusion in the workplace, and how can organizations create a culture of equity and belonging for all employees?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of healthcare systems, including predictive analytics, personalized treatment plans, and remote monitoring solutions?"),
    ("What are the latest developments in the field of biotechnology, and how are biotechnologies being used to create new products and solutions in industries such as medicine, agriculture, and energy?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of financial systems, including fraud detection, algorithmic trading, and personalized banking services?"),
    ("What are the key principles of sustainable development, and how are governments, businesses, and individuals working together to promote environmental health, social equity, and economic prosperity?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of marketing campaigns, including the use of predictive analytics and personalized content to reach target audiences?"),
    ("What are the latest trends in the field of artificial intelligence, and how are AI technologies being used to create innovative solutions and improve efficiency in various industries?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of transportation systems, including the development of smart traffic management systems and autonomous vehicles?"),
    ("What are the key factors driving the adoption of renewable energy, and how are advancements in technology and policy initiatives contributing to the transition to a sustainable energy future?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of customer service systems, including the use of chatbots and virtual assistants to enhance customer experience?"),
    ("What are the most effective strategies for managing mental health and well-being in the workplace, and how can employers support their employees' mental health needs?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of educational systems, including personalized learning and adaptive testing?"),
    ("What are the latest developments in the field of robotics, and how are robots being used to create innovative solutions and improve efficiency in various industries?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of healthcare systems, including predictive analytics, personalized treatment plans, and remote monitoring solutions?"),
    ("What are the key principles of effective project management, and how can project managers successfully lead teams to achieve their goals?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of financial systems, including fraud detection, algorithmic trading, and personalized banking services?"),
    ("What are the latest trends in the field of artificial intelligence, and how are AI technologies being used to create innovative solutions and improve efficiency in various industries?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of marketing campaigns, including the use of predictive analytics and personalized content to reach target audiences?"),
    ("What are the key factors driving the growth of the Internet of Things (IoT), and how are IoT devices being used to create smart homes, cities, and industries?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of cybersecurity systems, including the detection and prevention of cyber threats?"),
    ("What are the most effective strategies for promoting diversity and inclusion in the workplace, and how can organizations create a culture of equity and belonging for all employees?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of transportation systems, including the development of smart traffic management systems and autonomous vehicles?"),
    ("What are the latest developments in the field of biotechnology, and how are biotechnologies being used to create new products and solutions in industries such as medicine, agriculture, and energy?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of customer service systems, including the use of chatbots and virtual assistants to enhance customer experience?"),
    ("What are the key principles of sustainable development, and how are governments, businesses, and individuals working together to promote environmental health, social equity, and economic prosperity?"),
    ("How are advancements in artificial intelligence and machine learning being used to improve the capabilities of educational systems, including personalized learning and adaptive testing?")
]
  
let searchCount = 0;
let userDelay = 60000; // Default delay is 1 minute
let totalSearchCount = 10; // Default number of searches
let currentTabId;

function getRandomQuery() {
  return searchQueries[Math.floor(Math.random() * searchQueries.length)];
}

function performSearch() {
  let query = getRandomQuery();
  chrome.tabs.update(currentTabId, { url: `https://www.bing.com/search?q=${query}` }, (tab) => {
    if (searchCount < totalSearchCount) {
      searchCount++;
      setTimeout(performSearch, userDelay); // Use the user-specified delay
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startSearches') {
    searchCount = 0;
    userDelay = request.delay || 60000; // Use the user-specified delay or default to 1 minute
    totalSearchCount = request.searchCount || 10; // Use the user-specified number of searches or default to 10

    // Open a new tab or reuse the current one
    chrome.tabs.create({ url: "https://www.bing.com" }, (tab) => {
      currentTabId = tab.id;
      setTimeout(performSearch, userDelay); // Start the first search after the delay
    });

    sendResponse({status: "searches started"});
  }
});
