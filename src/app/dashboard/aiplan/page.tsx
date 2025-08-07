'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const AiPage = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedPlan, setEditedPlan] = useState("");
  const [selectedModel, setSelectedModel] = useState("deepseek");

  const askAI = async () => {
    if (!input) return;

    setLoading(true);
    setResponse("");
    setError("");
    setEditMode(false);

    try {
      const res = await fetch("/api/aiplan", {
        method: "POST",
        body: JSON.stringify({ prompt: input, model: selectedModel }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "Une erreur est survenue.");
      } else {
        const data = await res.json();
        setResponse(data.result);
        setEditedPlan(data.result);
      }
    } catch (err) {
      setError("Erreur réseau ou serveur. Réessaie.");
    } finally {
      setLoading(false);
    }
  };

  const submitModifiedPlan = () => {
    setResponse(editedPlan);
    setEditMode(false);
  };

  const applyToCalendarTodo = async () => {
    try {
      const res = await fetch("/api/plan/save", {
        method: "POST",
        body: JSON.stringify({ plan: editedPlan || response }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        alert("✅ Plan added to calendar and to-do list!");
      } else {
        alert("❌ Failed to save plan.");
      }
    } catch {
      alert("⚠️ Error while saving plan.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/aiplan">AI Plan</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex-1 flex items-center justify-center mb-[30%]">
        <div className="w-full xl:w-2/3 space-y-8 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Find Your Way To Finish
          </h1>

          {/* Model Selector */}
          <div className="flex w-full max-w-xl mx-auto items-center gap-2">
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Choose Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deepseek">DeepSeek-V1</SelectItem>
                <SelectItem value="mixtral">Mixtral</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder="Plan a SaaS launch, learn English, ..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={askAI} disabled={loading}>
              {loading ? "Thinking..." : "Ask AiPlan"}
            </Button>
          </div>

          {error && <div className="text-red-500 font-medium">{error}</div>}

          {/* Response Display */}
          {response && !editMode && (
          <div className="mt-8 text-left bg-muted p-6 rounded-md max-w-4xl mx-auto overflow-x-auto prose dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{response}</ReactMarkdown>
            <div className="flex justify-between mt-4 gap-2">
              <Button variant="outline" onClick={() => setEditMode(true)}>
                Modify Plan
              </Button>
              <Button onClick={applyToCalendarTodo}>
                Apply to Calendar / Todo
              </Button>
            </div>
          </div>
        )}

          {/* Edit Mode */}
          {editMode && (
            <div className="mt-8 max-w-4xl mx-auto text-left">
              <Textarea
                className="w-full h-96"
                value={editedPlan}
                onChange={(e) => setEditedPlan(e.target.value)}
              />
              <div className="flex justify-end mt-4 gap-2">
                <Button variant="secondary" onClick={() => setEditMode(false)}>
                  Cancel
                </Button>
                <Button onClick={submitModifiedPlan}>
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiPage;
