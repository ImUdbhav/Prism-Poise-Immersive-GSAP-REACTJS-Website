export const createMaskAnimation = (timeline, element) => {
    const masks = element.querySelectorAll('.mask');
    const finalClipPaths = [
      "polygon(0% 0%, 33.5% 0%, 33.5% 33%, 0% 33.5%)",
      "polygon(33% 0%, 66.5% 0%, 66.5% 33%,33% 33.5%)",
      "polygon(66% 0%, 100% 0%, 100% 33%, 66% 33.5%)",
            "polygon(0% 33%, 33.5% 33%, 33.5% 66%, 0% 66.5%)",
            "polygon(33% 33%, 66.5% 33%, 66.5% 66%, 33% 66.5%)",
            "polygon(66% 33%, 100% 33%, 100% 66%, 66% 66.5%)",
            "polygon(0% 66%, 33.5% 66%, 33.5% 100%, 0% 100%)",
            "polygon(33% 66%, 66.5% 66%, 66.5% 100%, 33% 100%)",
            "polygon(66% 66%, 100% 66%, 100% 100%, 66% 100%)"
    ];
  
    masks.forEach((mask, index) => {
      timeline.to(mask, {
        clipPath: finalClipPaths[index],
        duration: 0.5,
        ease: "power2.inOut",
      });
    });
  };