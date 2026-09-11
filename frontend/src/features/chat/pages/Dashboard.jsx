import { useEffect, useState } from "react";
import { useChat } from "../hooks/useChat";

function Dashboard() {

    const chat = useChat();
    const [message, setMessage] = useState("");

    const dummyMessages = [
        {
            id: 1,
            role: "user",
            content: "What is the weather like in Delhi today?"
        },
        {
            id: 2,
            role: "AI",
            content: "Delhi is warm today with a high around 31°C and light haze in the evening."
        },
        {
            id: 3,
            role: "user",
            content: "Suggest a healthy 10-minute breakfast."
        },
        {
            id: 4,
            role: "AI",
            content: "Try overnight oats with banana, chia seeds and a handful of nuts. It is quick and nutritious."
        },
        {
            id: 5,
            role: "user",
            content: "Explain React useEffect in simple words."
        },
        {
            id: 6,
            role: "AI",
            content: "useEffect is a React hook used to run side effects like API calls, subscriptions, and updating the DOM after rendering."
        }
    ];


    useEffect(() => {
        chat.initializeSocketConnection();
    }, []);


    function handleSubmit(event) {
        event.preventDefault();

        console.log(message);

        setMessage("");
    }


    return (

        <div className="h-screen w-full bg-[#111111] text-white flex p-5 gap-5 overflow-hidden">


            {/* Sidebar */}

            <div className="w-60 bg-[#171717] rounded-3xl border border-zinc-700 p-5 flex flex-col">


                <h1 className="text-2xl font-bold mb-8">
                    Perplexity
                </h1>


                <button className="w-full py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
                    + New Chat
                </button>


                <div className="mt-6 space-y-3 overflow-y-auto">


                    {
                        [
                            "Weather discussion",
                            "React explanation",
                            "Breakfast ideas"
                        ].map((title, index) => (
                            <div
                                key={index}
                                className="border border-zinc-600 rounded-xl px-3 py-2 cursor-pointer hover:bg-zinc-800"
                            >
                                {title}
                            </div>
                        ))
                    }


                </div>


            </div>



            {/* Main */}

            <div className="max-w-3/5 mx-auto min-w-0 gap-4 flex-1 flex flex-col relative">



                {/* Chat Area */}

                <div className="messages scrollbar-hide absolute top-0 bottom-20 left-0 right-0 overflow-y-auto space-y-3 pr-1">
                    {
                        dummyMessages.map((msg) => (

                            <div
                                key={msg.id}
                                className={`max-w-[82%] w-fit rounded-2xl px-4 py-3 text-sm md:text-base ${msg.role === "user"
                                        ? "ml-auto rounded-br-none bg-white/12 text-white"
                                        : "mr-auto border border-white/25 bg-[#0f1626] text-white/90"
                                    }`}
                            >

                                <p className="leading-7">
                                    {msg.content}
                                </p>

                            </div>

                        ))
                    }

                </div>



                {/* Input */}

                <form
                    onSubmit={handleSubmit}
                    className="absolute bottom-0 left-0 right-0 w-full border border-zinc-700 rounded-2xl p-3 flex gap-3 mt-4 bg-[#111111]"
                >

                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 bg-transparent outline-none px-3 text-white placeholder:text-zinc-500"
                    />


                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl transition"
                    >
                        Send
                    </button>


                </form>


            </div>


        </div>

    );
}


export default Dashboard;

