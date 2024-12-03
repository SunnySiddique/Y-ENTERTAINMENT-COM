import MediaInstagramGallery from "../../components/media/MediaInstagramGallery";
import MediaVideoGallery from "../../components/media/MediaVideoGallery";

const MediaPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* MediaInstagramGallery */}
        <div className="mt-10">
          <MediaInstagramGallery />
        </div>
        <div className="mt-10">
          <MediaVideoGallery />
        </div>
      </div>
    </>
  );
};

export default MediaPage;
