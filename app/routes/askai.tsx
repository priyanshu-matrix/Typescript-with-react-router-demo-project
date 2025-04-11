import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '~/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { AlertCircle } from 'lucide-react';

export const route = {
    path: "/askai"
  };

export default function AskAI() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    interface ApiRequest {
        prompt: string;
    }

    interface ApiResponse {
        status: string;
        response: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!prompt.trim()) return;

            setIsLoading(true);
            setError('');
            
            try {
                    const res = await fetch('http://127.0.0.1:8000/api/askai', {
                            method: 'POST',
                            headers: {
                                    'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ prompt }),
                    });
                    
                    const data: ApiResponse = await res.json();
                    
                    if (data.status === "True") {
                            setResponse(data.response);
                    } else {
                            setError('Failed to get a valid response');
                    }
            } catch (err: unknown) {
                    setError('An error occurred while fetching the response');
                    console.error(err);
            } finally {
                    setIsLoading(false);
            }
    };

    return (
        <div id="askai" className="max-w-3xl mx-auto p-6 pt-10 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center">MedBot</h1>
            
            <Card className="mb-8">
            <CardHeader>
                <CardTitle>Your Question</CardTitle>
                <CardDescription>Get personalized advice and insights for your health questions.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="prompt">Question</Label>
                    <Textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your question here..."
                    className="resize-none min-h-[120px]"
                    required
                    />
                </div>
                
                <Button 
                    type="submit" 
                    disabled={isLoading || !prompt.trim()}
                    className="w-full"
                >
                    {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing
                    </>
                    ) : (
                    'Ask AI'
                    )}
                </Button>
                </form>
            </CardContent>
            </Card>

            {error && (
            <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
            )}

            {response && (
            <Card>
                <CardHeader>
                <CardTitle>Response</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="p-4 rounded-md bg-muted whitespace-pre-wrap">
                    {response}
                </div>
                </CardContent>
            </Card>
            )}
        </div>
    );
}