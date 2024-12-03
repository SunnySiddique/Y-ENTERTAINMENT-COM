import { ArrowRight, Calendar, Heart } from "lucide-react";
import LoadMoreButton from "../LoadMoreButton";

const events = [
  {
    id: 1,
    title: "MODERN TECHNOLOGY TRENDS AND LUXURY WEBSITE DEVELOPMENT",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1732574139465-TOIQZBMG0XT92UUF64HG/Screenshot+2024-11-25+at+22.34.13.png",
    date: "November 23, 2024",
    location: "New York, NY",
    price: 90,
    des: "The luxury industry is at the forefront of integrating cutting-edge technologies to enhance customer engagement and deliver personalized experiences. AI-powered tools like chatbots, predictive analytics, and recommendation engines are revolutionizing customer interactions by tailoring services and content to individual preferences.",
    tag: "15% OFF",
  },
  {
    id: 2,
    title: "PRODUCT DESIGN ENGINEER IN THE SPOTLIGHT: MUHAMMAD TALHA",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1719894869600-PIFM3CZL8LG2F1VGHKXQ/1718898893243.jpg",
    date: "July 2, 2024",
    des: "Collaborating with talented individuals like Muhammad Talha is something we truly cherish. In June, as we celebrated 11 years since Y Entertainment’s incorporation, we have released this beautiful gem that he designed for us to mark the occasion. It’s a digital 3D model of a bracelet, created as part of the innovation we are developing.",
    price: 80,
    tag: "New Event",
  },
  {
    id: 3,
    title: "FILM RECOMMENDATION: NEVER LET ME GO",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1710276884031-GAQ9SIBPQ8M4D9KRCC4C/Screenshot+2024-03-12+at+20.54.18.png",
    date: "April 3, 2024",
    des: "Our film recommendation by Amber Hagan comes in the wake of AI, and arising questions that come from the intersections of technological innovations and ethics. The film is based on the novel by Kazou Ishiguro and is set in an alternate history where human clones are raised in an English boarding school.",
    price: 0,
    tag: "New Event",
  },
  {
    id: 4,
    title:
      "SHAPING THE FUTURE: THE IMPACT OF FEMALE LEADERSHIP IN TODAY’S BUSINESS WORLD",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1709920824961-9IAU1R6C4UPD4CUW4LZE/Screenshot+2024-03-08+at+17.54.42.png",
    date: "March 8, 2024M",
    des: "In today's dynamic business landscape, a major shift is underway that is transforming traditional notions of leadership and reshaping the future of business dynamics. At the forefront of this development is the growing influence of women leaders, whose impact on the business world transcends statistical measures and resonates deeply in organisational cultures.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 5,
    title: "ARTIST IN THE SPOTLIGHT: WISNU MANDALA",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1708802596900-TAPZC1BGI78DKJ1PTYT2/Y+colleagueArtboard+5.png",
    date: "February 24, 2024",
    des: "Wisnu is a talented creative director, who has worked on numerous projects and shares his creativity through leading multiple creative campaigns. Some of these include companies such as Samsung, IKEA, Nestle, and Puma, among many others. Wisnu has won over 30 business-related awards within the past 2 years and has amassed experience from different advertising associations.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 6,
    title: "Classic Rock Hits",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1699365217357-ZZOIUJHFY5Z5ONMH5FE2/Screenshot+2023-11-04+at+18.04.40.png",
    date: "Monday, June 05 | 08:00 PM",
    des: "Wisnu is a talented creative director, who has worked on numerous projects and shares his creativity through leading multiple creative campaigns. Some of these include companies such as Samsung, IKEA, Nestle, and Puma, among many others. Wisnu has won over 30 business-related awards within the past 2 years and has amassed experience from different advertising associations.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 7,
    title:
      "FASHION FORWARD: THE UK'S CREATIVE EXPANSION MEETS THE DIGITAL FRONTIERs",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1691513521821-YONENH41V80444ION76L/4+ALO+artist+London.JPEG",
    date: "November 7, 2023",
    des: "As a part of our primary market research, we have been examining approximately 200 high-end brands that are part of the London Fashion Week designer community run by the British Fashion Council. There were a few brands that caught our attention for their rich creative talent. If Web3, in conjunction with AI would be applied to their strategies, the potential for the whole sector to be transformed is enormous",
    price: 100,
    tag: "New Event",
  },

  {
    id: 8,
    title: "ALO: CELEBRATING FEMININITY THROUGH UNIQUELY CRAFTED ART",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1581710123670-A4LSS891NSSKWQBSS0LT/Screenshot+2020-02-14+at+19.19.45.png",
    date: "August 8, 2023",
    des: "ALO's artistry celebrates women and their strength while breaking the conventional boundaries of art through his diverse canvas of expression. His artwork seamlessly blends art and technology, creating a captivating fusion of creative tech. His unique style has garnered him widespread recognition, and he is renowned for his innovative approach to creating art.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 9,
    title: "THE RISE OF ROSALÍA",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1518095179912-LL8G22BX3XPG883LE2SW/19041-f0f7964c117497e31b24718d6f7f87207ce66f68-original.jpg",
    date: "February 15, 2020",
    des: "It is a fact: Rosalia has become a mass phenomenon. It has not been because of her extra-long nails that caused a lot of controversy in the public. Nor has it been - although it has helped - her friendship with socialite Kylie Jenner. Rosalia’s secret? An urban and modern interpretation of flamenco. In her music she mixes it with trap and R&B. While she uses flamenco to differentiate herself, she subtly reintroduces it to a generations that has despised it or completely ignored it before.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 10,
    title: "Avant-gardist look to fashion",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1510832778823-JLLDODQ9CRB9S5ZO41JI/22550315_10155538534576131_2344810678578100972_o.jpg",
    date: "February 8, 2018",
    des: "As it commonly known art and fashion design are having a longstanding relationship for a while now at least since 1855, year in which designers started to actively collaborate with artists. The fruits of this collaboration are to be considered no less than masterpieces. Their legacy still resonates today in the works of both contemporary artists and fashion designers. ",
    price: 100,
    tag: "New Event",
  },
  {
    id: 11,
    title: "Classic Rock Hits",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1509926856056-MCZOWIU0ZM16XJDX5MWD/11+%281%29.jpg",
    date: "January 24, 2018",
    des: "Italian Luxury Fashion Brands and How They Achieved Their Status",
    price: 100,
    tag: "New Event",
  },
  {
    id: 12,
    title: "The New Valentino Collection",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1509927008667-WGF6D3FQJXBM2J0UY72Z/IMG_1773.jpg",
    date: "November 16, 2017",
    des: "Valentino was founded in 1960 by two Italians named Valentino Garavani and Giancarlo Giammetti. Over the years, this fashion house has become renowned for its couture savoir faire. Their collection exemplified the best in elegance and each piece signifies a sense of timelessness and grace. The Valentino collection is inspired by hip-hop culture and each item displays a perfect mix of traditional craft with contemporary designs. It is not surprising this label has established a following of devoted customers who have been buying its clothes since the time Valentino was established.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 13,
    title: "What Should Men Wear To Members Clubs In London?",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1491730535761-U7OYBSH7AA7XWRGKEB0C/intro_london.jpg",
    date: "November 5, 2017",
    price: 100,
    tag: "New Event",
  },
  {
    id: 14,
    title: "Classic Rock Hits",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1491410400208-G7JC3YKD8NAKOWZQS8A8/artificial-intelligence-music-composition2.jpg",
    date: "Monday, June 05 | 08:00 PM",
    des: "Before entering a member’s club in London, it makes sense to do some due diligence regarding attire. Before you go out and buy some new clothes, you need to keep in mind that it never pays to wear the nicest clothes. Also, don’t wear black because most member’s clubs have loads of black lights. In such lighting conditions, black dresses do not look very good.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 15,
    title: "What to wear in nightclubs in London",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1490822878370-LGBRQYGFKJJCQP0ZAIST/Grime+New+Image.jpg",
    date: "October 6, 2017",
    des: "If you are visiting London and would like to visit a nightclub, then there are a few things you need to know about what to wear in the nightclub.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 16,
    title: "4 Things To Do In London This Summer",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1490440525183-FOL0QDGY79FTRCI6VUOQ/shazamsnap11.jpg",
    date: "April 9, 2017",
    des: "There are some great things you can do this summer in London that we summarise in this article, find out for yourself!",
    price: 100,
    tag: "New Event",
  },
  {
    id: 17,
    title: "Tech: Chinese Search Engine Baidu Develops AI To Compose Music!",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1489603189548-M3RAORQP0KQGVKH28SRI/Dolce-Gabbana-2016-Spring-Summer-Mens-Campaign-006.jpg",
    date: "April 5, 2017",
    des: "Artificial Intelligence (AI), will soon grow into a quintessential element of our everyday lives. In the past, it was projected that AI would materialise in the form of robots and applications, that would substitute the general functionality of the human condition.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 18,
    title: "Y Team’s Top 16 Grime Songs in 2016",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1489533621703-NNR8FGWVBOGFSXMH0ONL/una-1.jpg",
    date: "March 27, 2017",
    des: "2016 was a great year for grime - nevertheless here are the top 16 grime songs that slid their way into music history.",
    price: 100,
    tag: "New Event",
  },
  {
    id: 19,
    title: "BIO: Kehlani",
    image:
      "https://images.squarespace-cdn.com/content/v1/577d6f7020099e0c9bfa304d/1488993347242-O4VE72G2T4QGWQ3BOSD2/10354889_930742863626167_3434785014323125009_n.jpg",
    date: "March 8, 2017",
    des: "California-born Kehlani has been having her name flashed everywhere lately as one of the rising R&B talents of the new millennium.",
    price: 100,
    tag: "New Event",
  },
];

const FeatureItems = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white  overflow-hidden shadow-sm flex flex-col md:flex-row mb-10 relative"
        >
          {event.tag && (
            <span className="px-3 py-1 text-sm text-white bg-purple-500 absolute top-0 right-0 rounded-bl-2xl">
              {event.tag}
            </span>
          )}
          <div className="relative md:w-2/5">
            <div className="relative aspect-[4/3]">
              <img
                src={event.image}
                alt="Rock Revolt concert crowd"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[#00D1D1] font-semibold text-sm">
                  From${event.price}
                </span>
              </div>

              <h3 className="text-lg lg:text-lg font-bold text-gray-900 mb-1 ">
                {event.title}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center text-[#00D1D1] ">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-[#00D1D1] font-semibold lg:text-lg text-sm">
                    {event.date}
                  </span>
                </div>
                <div className="flex items-center text-gray-500">
                  <p className="text-sm flex items-start">
                    {event.des?.substring(0, 200)}
                  </p>
                </div>
                <div className="">
                  <button className="flex items-center text-sm text-gray-500  rounded-lg  mt-3">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1  " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Button */}
      <LoadMoreButton center={"start"} title="View More" />
    </div>
  );
};

export default FeatureItems;
