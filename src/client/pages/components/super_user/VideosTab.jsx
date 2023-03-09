import React, { useState, useEffect } from 'react';
import {
  getDocs, collection, deleteDoc, doc,
} from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { db } from '../../../../config/firebaseFE';
import AddVideoForm from './AddVideoForm.jsx';
import { updateFeaturedVideo } from '../../../redux/global';
import { get, update } from '../../../api/firestore-services.js';

// renders list of all videos from DB collection and allows superuser CRUD functionality
export default function VideosTab() {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  async function fetchVideos() {
    try {
      const snapshot = await getDocs(collection(db, 'videos'));
      const data = snapshot.docs.map((d) => ({ data: d.data(), id: d.id }));
      setVideos(data);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  const deleteVideo = async (id) => {
    const videoRef = doc(db, 'videos', id);
    await deleteDoc(videoRef);
    fetchVideos();
  };

  const setFeatured = async (video) => {
    const featuredVideo = await get('featured');
    await update(featuredVideo.res[0]?.id, video.data, 'featured');
  };

  return (
    <section className="w-2/3 h-1/2 max-h-fit border-solid border-2 border-current overflow-y-scroll">
      <h1 className="border-solid border-2 border-red">VIDEOS TAB</h1>
      <ul className="">
        {videos?.map((video) => (
          <li className="flex gap-5 border-solid border-2 border-current-500">
            <p>{`title: ${video?.data.title}`}</p>
            <p>{`description: ${video?.data.description}`}</p>
            <p>{`date uploaded: ${video?.data.createdAt.toDate().toDateString()}`}</p>
            <p>{`views: ${video?.data.views}`}</p>
            <button
              onClick={() => deleteVideo(video?.id)}
              type="submit"
            >
              delete video
            </button>
            <button
              onClick={() => setFeatured(video)}
              type="button"
            >
              select video as featured
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}