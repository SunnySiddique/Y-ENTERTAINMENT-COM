import GetStartedSection from "../../components/home/GetStartedSection";
import LoadMoreButton from "../../components/LoadMoreButton";
import MediaCards from "../../components/media/MediaCards";
import MediaHeader from "../../components/media/MediaHeader";

const MediaPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div>
          <MediaHeader />
        </div>

        {/* Media Cards */}
        <div className="mt-14">
          <MediaCards />
        </div>

        {/* Button */}
        <LoadMoreButton title={"Load More"} center="center" />
      </div>
      <div>
        <GetStartedSection />
      </div>
    </>
  );
};

export default MediaPage;
