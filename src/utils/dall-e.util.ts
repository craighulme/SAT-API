import axios from 'axios';

export async function generateImageFromDALL_E(description: string): Promise<string> {
    // Replace with the actual API endpoint and parameters
    const url = 'https://api.dall-e.com/generate';
    const params = {
        description: description
    };

    try {
        const response = await axios.post(url, params);
        if (response.status === 200 && response.data && response.data.image_url) {
            return response.data.image_url;
        } else {
            throw new Error('Failed to generate image from DALL-E');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}