import React from 'react';
import { motion } from 'framer-motion';
import { LAYOUTS, CONTENT_TYPES } from './ContentTypes';

const ObjectiveContent = ({ content }) => (
  <div className="space-y-4">
    {content.structure.sections.map((section, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-[#EFEAFC] rounded-xl p-6"
      >
        <h3 className="text-xl font-medium text-[#0D065B] mb-4">{section.title}</h3>
        <ul className="space-y-3">
          {section.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-[#0D065B]">{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
);

const ConceptContent = ({ content }) => (
  <div className="space-y-6">
    <div className="bg-[#D6DCFF] rounded-xl p-6">
      <h2 className="text-2xl font-bold text-[#0D065B] mb-4">{content.structure.mainContent.title}</h2>
      <p className="text-[#0D065B]/80 mb-6">{content.structure.mainContent.description}</p>
      
      {content.structure.mainContent.visualAid && (
        <div className="rounded-xl overflow-hidden bg-white p-4">
          {renderVisualAid(content.structure.mainContent.visualAid)}
        </div>
      )}
    </div>

    {content.structure.examples && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.structure.examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/50 rounded-xl p-6"
          >
            <h3 className="text-lg font-medium text-[#0D065B] mb-3">{example.title}</h3>
            <p className="text-[#0D065B]/80">{example.description}</p>
          </motion.div>
        ))}
      </div>
    )}
  </div>
);

const ExerciseContent = ({ content }) => (
  <div className="space-y-6">
    <div className="bg-[#EFEAFC] rounded-xl p-6">
      <h2 className="text-2xl font-bold text-[#0D065B] mb-4">{content.structure.introduction.title}</h2>
      <p className="text-[#0D065B]/80 mb-6">{content.structure.introduction.description}</p>
      
      {content.structure.introduction.prerequisites && (
        <div className="bg-white/50 rounded-lg p-4">
          <h3 className="font-medium text-[#0D065B] mb-2">Prerequisites:</h3>
          <ul className="space-y-2">
            {content.structure.introduction.prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-center gap-2 text-[#0D065B]/80">
                <span className="text-[#5F29FF]">•</span>
                {prereq}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <div className="space-y-4">
      {content.structure.steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/80 rounded-xl p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#5F29FF] text-white flex items-center justify-center font-medium">
              {index + 1}
            </div>
            <h3 className="text-lg font-medium text-[#0D065B]">{step.instruction}</h3>
          </div>

          {step.code && (
            <div className="bg-[#0D065B] text-white rounded-lg p-4 mb-4 font-mono text-sm">
              <pre>{step.code}</pre>
            </div>
          )}

          {step.hint && (
            <div className="bg-[#FFFFE6] rounded-lg p-3 mt-3">
              <p className="text-[#0D065B]/80 text-sm italic">💡 Hint: {step.hint}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>

    {content.structure.conclusion && (
      <div className="bg-[#F1FFF9] rounded-xl p-6">
        <h3 className="text-xl font-medium text-[#0D065B] mb-4">Next Steps</h3>
        <ul className="space-y-2">
          {content.structure.conclusion.nextSteps.map((step, index) => (
            <li key={index} className="flex items-center gap-2 text-[#0D065B]/80">
              <span className="text-[#5F29FF]">→</span>
              {step}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const AssessmentContent = ({ content }) => (
  <div className="space-y-6">
    <div className="bg-[#EFEAFC] rounded-xl p-6">
      <h2 className="text-2xl font-bold text-[#0D065B] mb-2">{content.structure.introduction.title}</h2>
      <p className="text-[#0D065B]/80 mb-4">{content.structure.introduction.instructions}</p>
      
      <div className="flex items-center gap-4 text-sm text-[#0D065B]/60">
        <div className="flex items-center gap-1">
          <span>⏱️</span>
          <span>{content.structure.introduction.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🎯</span>
          <span>{content.structure.introduction.totalPoints} points</span>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      {content.structure.questions.map((question, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/80 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#5F29FF] text-white flex items-center justify-center flex-shrink-0">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="text-lg text-[#0D065B] mb-4">{question.question}</p>
              
              {question.type === 'multiple-choice' && (
                <div className="space-y-4">
            {content.structure.stages.map((stage, index) => (
              <TimelineStage key={index} stage={stage} index={index} />
            ))}
          </div>
        );
      case LAYOUTS.STEPS:
        return (
          <div className="space-y-6">
            {content.structure.steps?.map((step, index) => (
              <StepContent key={index} step={step} index={index} />
            ))}
          </div>
        );
      case LAYOUTS.MASONRY:
        return (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {renderContent()}
          </div>
        );
      case LAYOUTS.CAROUSEL:
        return <CarouselContent content={content} />;
      default:
        return <div className="space-y-6">{renderContent()}</div>;
    }
  };

  const renderContent = () => {
    switch (content.type) {
      case "objective":
        return <ObjectiveContent content={content} />;
      case "concept":
        return <ConceptContent content={content} />;
      case "exercise":
        return <ExerciseContent content={content} />;
      case "assessment":
        return <AssessmentContent content={content} />;
      case "case-study":
        return <CaseStudyContent content={content} />;
      case "reference":
        return <ReferenceContent content={content} />;
      case "discussion":
        return <DiscussionContent content={content} />;
      case "project":
        return <ProjectContent content={content} />;
      case "timeline":
        return <TimelineContent content={content} />;
      case "mixed":
        return renderMixedContent(content);
      default:
        return <DefaultContent content={content} />;
    }
  };

  const renderMixedContent = (content) => {
    return (
      <div className="space-y-8">
        {Object.entries(content.structure).map(([sectionKey, sectionContent], index) => {
          if (typeof sectionContent === 'object' && !Array.isArray(sectionContent)) {
            return (
              <div key={sectionKey} className="bg-white/80 rounded-xl p-6">
                {sectionContent.title && (
                  <h3 className="text-xl font-medium text-[#0D065B] mb-4">
                    {sectionContent.title}
                  </h3>
                )}
                <div className="space-y-4">
                  {/* Render section content based on its type */}
                  {renderSectionContent(sectionContent)}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  const renderSectionContent = (section) => {
    if (Array.isArray(section)) {
      return (
        <ul className="space-y-2">
          {section.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#5F29FF]">•</span>
              <span className="text-[#0D065B]/80">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (section.type === 'interactive') {
      return (
        <div className="bg-[#EFEAFC] rounded-lg p-4">
          <h4 className="font-medium text-[#0D065B] mb-2">Interactive Exercise</h4>
          {/* Render interactive content based on section.activity */}
          <p className="text-[#0D065B]/80">{section.activity}</p>
        </div>
      );
    }

    // Handle other section types as needed
    return (
      <div className="text-[#0D065B]/80">
        {JSON.stringify(section, null, 2)}
      </div>
    );
  };

  return (
    <div className={`content-renderer theme-${theme}`}>
      {content.title && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-[#0D065B] mb-6"
        >
          {content.title}
        </motion.h2>
      )}
      {content.description && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#0D065B]/80 mb-8"
        >
          {content.description}
        </motion.p>
      )}
      const TimelineContent = ({ content }) => {
  return (
    <div className="space-y-6">
      {content.structure.stages.map((stage, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#5F29FF] text-white flex items-center justify-center">
              {index + 1}
            </div>
            {index < content.structure.stages.length - 1 && (
              <div className="w-0.5 h-full bg-[#5F29FF]/20" />
            )}
          </div>
          <div className="flex-1 pb-6">
            <h3 className="text-xl font-medium text-[#0D065B] mb-2">
              {stage.title}
            </h3>
            <p className="text-[#0D065B]/80 mb-4">{stage.description}</p>
            {stage.milestones?.length > 0 && (
              <div className="space-y-2">
                {stage.milestones.map((milestone, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[#0D065B]/70"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#5F29FF]/40" />
                    {milestone}
                  </div>
                ))}
              </div>
            )}
            {stage.keyArtworks?.length > 0 && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {stage.keyArtworks.map((artwork, i) => (
                  <div key={i} className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-medium text-[#0D065B] mb-1">{artwork.title}</h4>
                    <p className="text-sm text-[#0D065B]/70">
                      {artwork.artist}, {artwork.year}
                    </p>
                    <p className="text-sm text-[#0D065B]/80 mt-2">
                      {artwork.significance}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const CarouselContent = ({ content }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const next = () => {
    setActiveIndex((current) => 
      current === content.items.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setActiveIndex((current) => 
      current === 0 ? content.items.length - 1 : current - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <motion.div
          className="flex"
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          {content.items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
            >
              {renderCarouselItem(item)}
            </div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2
          hover:bg-white transition-colors"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2
          hover:bg-white transition-colors"
      >
        →
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {content.items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-[#5F29FF]' : 'bg-[#5F29FF]/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const renderCarouselItem = (item) => {
  switch (item.type) {
    case 'video':
      return (
        <div className="aspect-video">
          <video
            src={item.content}
            controls
            className="w-full h-full object-cover"
          />
        </div>
      );
    case 'image':
      return (
        <img
          src={item.content}
          alt={item.caption}
          className="w-full h-full object-cover"
        />
      );
    default:
      return (
        <div className="p-6 bg-white/80">
          {item.content}
        </div>
      );
  }
};

export {
  ContentRenderer,
  ObjectiveContent,
  ConceptContent,
  ExerciseContent,
  AssessmentContent,
  CaseStudyContent,
  ReferenceContent,
  DiscussionContent,
  ProjectContent,
  TimelineContent,
  CarouselContent
};y-3">
                  {question.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      className="w-full text-left p-4 rounded-lg border-2 border-transparent
                        hover:border-[#5F29FF] hover:bg-[#EFEAFC]/50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {question.type === 'open-ended' && (
                <textarea
                  className="w-full h-32 p-4 rounded-lg border-2 border-[#EFEAFC] focus:border-[#5F29FF]
                    focus:outline-none transition-colors resize-none"
                  placeholder="Type your answer here..."
                />
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const CaseStudyContent = ({ content }) => (
  <div className="space-y-6">
    <div className="bg-[#D6DCFF] rounded-xl p-6">
      <h2 className="text-2xl font-bold text-[#0D065B] mb-4">{content.structure.context.title}</h2>
      <p className="text-[#0D065B]/80 mb-6">{content.structure.context.background}</p>
      
      <div className="bg-white/50 rounded-lg p-4">
        <h3 className="font-medium text-[#0D065B] mb-2">The Challenge:</h3>
        <p className="text-[#0D065B]/80">{content.structure.context.challenge}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#EFEAFC] rounded-xl p-6"
      >
        <h3 className="text-xl font-medium text-[#0D065B] mb-4">Key Issues</h3>
        <ul className="space-y-3">
          {content.structure.analysis.keyIssues.map((issue, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#5F29FF]">•</span>
              <span className="text-[#0D065B]/80">{issue}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#F1FFF9] rounded-xl p-6"
      >
        <h3 className="text-xl font-medium text-[#0D065B] mb-4">Solution</h3>
        <p className="text-[#0D065B]/80 mb-4">{content.structure.solution.approach}</p>
        <ul className="space-y-3">
          {content.structure.solution.implementation.map((step, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#5F29FF]">→</span>
              <span className="text-[#0D065B]/80">{step}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
);

const ReferenceContent = ({ content }) => (
  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
    {content.structure.mainConcepts.map((concept, index) => (
      <div
        key={index}
        className="bg-white/80 rounded-xl p-6 break-inside-avoid-column mb-6"
      >
        <h3 className="text-xl font-medium text-[#0D065B] mb-3">{concept.term}</h3>
        <p className="text-[#0D065B]/80 mb-4">{concept.definition}</p>
        
        {concept.examples.length > 0 && (
          <div className="bg-[#EFEAFC]/30 rounded-lg p-3">
            <h4 className="font-medium text-[#0D065B] mb-2">Examples:</h4>
            <ul className="space-y-1">
              {concept.examples.map((example, i) => (
                <li key={i} className="text-[#0D065B]/70">{example}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
);

const renderVisualAid = (visualAid) => {
  switch (visualAid.type) {
    case CONTENT_TYPES.IMAGE:
      return (
        <img
          src={visualAid.content}
          alt={visualAid.caption || ''}
          className="w-full h-auto rounded-lg"
        />
      );
    case CONTENT_TYPES.DIAGRAM:
      return (
        <div className="relative">
          <img
            src={visualAid.content}
            alt={visualAid.caption || ''}
            className="w-full h-auto rounded-lg"
          />
          {visualAid.annotations?.map((annotation, index) => (
            <div
              key={index}
              className="absolute inline-block bg-white/90 rounded-lg px-2 py-1 text-sm shadow-lg"
              style={{
                left: `${annotation.position.x}%`,
                top: `${annotation.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {annotation.label}
            </div>
          ))}
        </div>
      );
    case CONTENT_TYPES.VIDEO:
      return (
        <div className="aspect-video rounded-lg overflow-hidden">
          <video
            src={visualAid.content}
            controls
            className="w-full h-full object-cover"
          />
        </div>
      );
    default:
      return null;
  }
};

const ContentRenderer = ({ content, theme = "default" }) => {
  const renderLayout = () => {
    switch (content.layout) {
      case LAYOUTS.GRID:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderContent()}
          </div>
        );
      case LAYOUTS.SPLIT:
        return (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">{renderMainContent()}</div>
            <div className="w-full md:w-1/2">{renderSupportingContent()}</div>
          </div>
        );
      case LAYOUTS.TIMELINE:
        return (
          <div className="space-y-4">
            {content.structure.stages?.map((stage, index) => (
              <TimelineStage key={index} stage={stage} index={index} />
            ))}
          </div>
        );
      case LAYOUTS.STEPS:
        return (
          <div className="space-y-6">
            {content.structure.steps?.map((step, index) => (
              <StepContent key={index} step={step} index={index} />
            ))}
          </div>
        );
      case LAYOUTS.MASONRY:
        return (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {renderContent()}
          </div>
        );
      case LAYOUTS.CAROUSEL:
        return <CarouselContent content={content} />;
      default:
        return <div className="space-y-6">{renderContent()}</div>;
    }
  };

  const TimelineStage = ({ stage, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-[#5F29FF] text-white flex items-center justify-center">
          {index + 1}
        </div>
        {/* Connecting line */}
        {index < content.structure.stages.length - 1 && (
          <div className="w-0.5 h-full bg-[#5F29FF]/20" />
        )}
      </div>
      <div className="flex-1 pb-6">
        <h3 className="text-xl font-medium text-[#0D065B] mb-2">
          {stage.title}
        </h3>
        <p className="text-[#0D065B]/80 mb-4">{stage.description}</p>
        {stage.milestones?.length > 0 && (
          <div className="space-y-2">
            {stage.milestones.map((milestone, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[#0D065B]/70"
              >
                <span className="w-2 h-2 rounded-full bg-[#5F29FF]/40" />
                {milestone}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  const StepContent = ({ step, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/50 rounded-xl p-6"
    >
      <h3 className="text-xl font-medium text-[#0D065B] mb-2">
        Step {index + 1}: {step.instruction}
      </h3>
      {step.hint && (
        <div className="mt-2 text-[#0D065B]/70 italic">
          Hint: {step.hint}
        </div>
      )}
    </motion.div>
  );

  const CarouselContent = ({ content }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
      <div className="relative rounded-xl overflow-hidden">
        <div className="flex">
          {content.items.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderCarouselItem(item)}
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {content.items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-[#5F29FF]' : 'bg-[#5F29FF]/20'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderCarouselItem = (item) => {
    switch (item.type) {
      case 'video':
        return (
          <div className="aspect-video">
            <video
              src={item.content}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        );
      case 'image':
        return (
          <img
            src={item.content}
            alt={item.caption}
            className="w-full h-full object-cover"
          />
        );
      default:
        return (
          <div className="p-6 bg-white/80">
            {item.content}
          </div>
        );
    }
  };

  const renderMainContent = () => {
    const { mainContent } = content.structure;
    return (
      <div>
        <h2 className="text-2xl font-bold text-[#0D065B] mb-4">
          {mainContent.title}
        </h2>
        <p className="text-[#0D065B]/80 mb-6">{mainContent.description}</p>
        {mainContent.visualAid && (
          <div className="rounded-xl overflow-hidden">
            {renderVisualAid(mainContent.visualAid)}
          </div>
        )}
      </div>
    );
  };

  const renderSupportingContent = () => {
    const { supportingContent } = content.structure;
    return (
      <div className="space-y-6">
        {supportingContent.examples?.length > 0 && (
          <div>
            <h3 className="text-xl font-medium text-[#0D065B] mb-3">
              Examples
            </h3>
            <ul className="space-y-2">
              {supportingContent.examples.map((example, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-[#0D065B]/80"
                >
                  <span className="text-[#5F29FF]">•</span>
                  {example}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Add other supporting content sections */}
      </div>
    );
  };

  const renderContent = () => {
    switch (content.type) {
      case "objective":
        return <ObjectiveContent content={content} />;
      case "concept":
        return <ConceptContent content={content} />;
      case "exercise":
        return <ExerciseContent content={content} />;
      case "assessment":
        return <AssessmentContent content={content} />;
      case "case-study":
        return <CaseStudyContent content={content} />;
      case "reference":
        return <ReferenceContent content={content} />;
      case "discussion":
        return <DiscussionContent content={content} />;
      case "project":
        return <ProjectContent content={content} />;
      default:
        return <DefaultContent content={content} />;
    }
  };

  return (
    <div className={`content-renderer theme-${theme}`}>
      {content.title && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-[#0D065B] mb-6"
        >
          {content.title}
        </motion.h2>
      )}
      {content.description && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#0D065B]/80 mb-8"
        >
          {content.description}
        </motion.p>
      )}
      {renderLayout()}
    </div>
  );
};

export default ContentRenderer;