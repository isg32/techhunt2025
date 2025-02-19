import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => (
      <div className="text-green-400">
        <p>Available commands:</p>
        <ul className="ml-4">
          <li>• help - Show this help message</li>
          <li>• about - Learn about Tech Hunt</li>
          <li>• rules - View competition rules</li>
          <li>• register - Get registration information</li>
          <li>• schedule - View event schedule</li>
          <li>• clear - Clear terminal</li>
        </ul>
      </div>
    ),
    about: () => (
      <div className="text-green-400">
        <p>Tech Hunt 2025 - The Ultimate Technical Treasure Hunt</p>
        <p className="mt-2">
          Join us for an exciting journey through the digital realm where your technical
          skills and problem-solving abilities will be put to the ultimate test.
        </p>
        <p className="mt-2">
          🏆 Prize Pool: $5,000
          <br />
          📅 Date: April 15-16, 2025
          <br />
          📍 Location: Virtual + On-Campus Finals
        </p>
      </div>
    ),
    rules: () => (
      <div className="text-green-400">
        <p>Competition Rules:</p>
        <ul className="ml-4">
          <li>• Teams of 2-3 members</li>
          <li>• All participants must be current college students</li>
          <li>• Multiple rounds of increasing difficulty</li>
          <li>• Time-based scoring system</li>
          <li>• Use of AI tools is prohibited</li>
          <li>• Top 10 teams qualify for on-campus finals</li>
        </ul>
      </div>
    ),
    register: () => (
      <div className="text-green-400">
        <p>Registration Information:</p>
        <p className="mt-2">
          Regular Registration: ₹50/Person
          <br />
          Registration Deadline: February 21, 2025
        </p>
        <p className="mt-2">
          Register at: <span className="underline">techhunt2025.com/register</span>
        </p>
      </div>
    ),
    schedule: () => (
      <div className="text-green-400">
        <p>Event Schedule:</p>
        <p className="mt-2">
          April 15:
          <br />
          09:00 - Virtual Kickoff
          <br />
          10:00 - Round 1 Begins
          <br />
          14:00 - Round 2 Begins
          <br />
          20:00 - Day 1 Concludes
        </p>
        <p className="mt-2">
          April 16:
          <br />
          09:00 - Finals Begin (Top 10 Teams)
          <br />
          16:00 - Award Ceremony
        </p>
      </div>
    ),
    clear: () => {
      setHistory([]);
      return <div></div>;
    },
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    // Show help command output on initial load
    setHistory([{ command: 'help', output: commands.help() }]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    
    if (trimmedInput) {
      if (trimmedInput === 'clear') {
        commands.clear();
      } else {
        const newEntry: CommandHistory = {
          command: input,
          output: commands[trimmedInput as keyof typeof commands]?.() || (
            <span className="text-red-500">
              Command not found. Type 'help' for available commands.
            </span>
          ),
        };
        
        setHistory((prev) => [...prev, newEntry]);
      }
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Tech Hunt 2025 Terminal</h1>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 min-h-[80vh] flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {history.map((entry, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span>{entry.command}</span>
                </div>
                <div className="ml-4 mt-2">{entry.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
            <span className="text-green-400">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-green-400 focus:ring-0"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;