import React, { useState, useRef } from 'react';
import axios from 'axios';

function Create() {
    const [file, setFile] = useState(null); // State to hold selected file
    const [caption, setCaption] = useState(''); // State for post caption
    const [previewImage, setPreviewImage] = useState(null); // State for previewing image
    const [filter, setFilter] = useState(''); // State for applying filter

    const imageRef = useRef(null); // Reference to the image element for applying filters

    // Function to handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        // Set file and preview image
        if (selectedFile) {
            setFile(selectedFile);
            setPreviewImage(URL.createObjectURL(selectedFile));
        } else {
            setFile(null);
            setPreviewImage(null);
        }
    };

    // Function to apply filter to preview image
    const applyFilter = (selectedFilter) => {
        setFilter(selectedFilter);
        if (imageRef.current) {
            imageRef.current.style.filter = selectedFilter; // Apply filter directly to the image style
        }
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('caption', caption);
            formData.append('filter', filter); // Include selected filter if needed

            // Make a POST request to your backend endpoint for file upload
            const response = await axios.post('http://localhost:3000/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Upload success:', response.data);
            // Optionally, redirect or show success message to the user
        } catch (error) {
            console.error('Upload error:', error);
            // Handle error, show user message, etc.
        }
    };

    return (
        <div className='flex items-center justify-center w-full h-screen p-4'>
            <div className='flex flex-col gap-3 m-3 text-center lg:w-1/2 sm:w-3/4'>
                <form className='flex flex-col gap-4 p-6 border border-gray-300 border-solid rounded-lg shadow-md' onSubmit={handleFormSubmit}>
                    <h1 className='text-4xl font-semibold'>Create Post</h1>

                    {/* Image Preview Section */}
                    <div className='relative'>
                        {previewImage && (
                            <img
                                ref={imageRef}
                                src={previewImage}
                                alt='Preview'
                                className='w-full rounded-lg'
                                style={{ filter: filter }} // Apply filter directly to the style attribute
                            />
                        )}
                        <div className='absolute flex gap-2 top-2 right-2'>
                            <button
                                type='button' // Set type to button to prevent form submission
                                className='px-3 py-1 text-white bg-gray-800 rounded-lg hover:bg-gray-600'
                                onClick={() => applyFilter('grayscale')}
                            >
                                Grayscale
                            </button>
                            <button
                                type='button' // Set type to button to prevent form submission
                                className='px-3 py-1 text-white bg-gray-800 rounded-lg hover:bg-gray-600'
                                onClick={() => applyFilter('sepia')}
                            >
                                Sepia
                            </button>
                            {/* Add more filter buttons as needed */}
                        </div>
                    </div>

                    {/* File Input for Upload */}
                    <input
                        type='file'
                        accept='image/*, video/*'
                        onChange={handleFileChange}
                        className='p-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md'
                        style={{ backgroundColor: '#fafafa' }}
                        required
                    />

                    {/* Caption Input */}
                    <input
                        type='text'
                        placeholder='Caption'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        className='p-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md'
                        style={{ backgroundColor: '#fafafa' }}
                        required
                    />

                    {/* Submit Button */}
                    <button
                        className='py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'
                        type='submit'
                        onClick={handleFormSubmit}
                    >
                        Upload
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;
