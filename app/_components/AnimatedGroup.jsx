"use client";
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import React from 'react';

const defaultContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Increase stagger duration for slower effect
            duration: 1.5, // Slower transition for the container
        },
    },
};

const defaultItemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.5 } // Slower transition for the items
    },
};

const presetVariants = {
    fade: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { duration: 1.5 } // Slower fade
            },
        },
    },
    slide: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1, y: 0,
                transition: { duration: 1.5 } // Slower slide
            },
        },
    },
    scale: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
                opacity: 1, scale: 1,
                transition: { duration: 1.5 } // Slower scale
            },
        },
    },
    blur: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: 'blur(4px)' },
            visible: {
                opacity: 1, filter: 'blur(0px)',
                transition: { duration: 1.5 } // Slower blur
            },
        },
    },
    'blur-slide': {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: 'blur(4px)', y: 20 },
            visible: {
                opacity: 1, filter: 'blur(0px)', y: 0,
                transition: { duration: 1.5 } // Slower blur-slide
            },
        },
    },
    zoom: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
                opacity: 1, scale: 1,
                transition: { type: 'spring', stiffness: 300, damping: 20, duration: 1.5 } // Slower zoom
            },
        },
    },
    flip: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, rotateX: -90 },
            visible: {
                opacity: 1, rotateX: 0,
                transition: { type: 'spring', stiffness: 300, damping: 20, duration: 1.5 } // Slower flip
            },
        },
    },
    bounce: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: -50 },
            visible: {
                opacity: 1, y: 0,
                transition: { type: 'spring', stiffness: 400, damping: 10, duration: 1.5 } // Slower bounce
            },
        },
    },
    rotate: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, rotate: -180 },
            visible: {
                opacity: 1, rotate: 0,
                transition: { type: 'spring', stiffness: 200, damping: 15, duration: 1.5 } // Slower rotate
            },
        },
    },
    swing: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, rotate: -10 },
            visible: {
                opacity: 1, rotate: 0,
                transition: { type: 'spring', stiffness: 300, damping: 8, duration: 1.5 } // Slower swing
            },
        },
    },
};

function AnimatedGroup({ children, className, variants, preset }) {
    const selectedVariants = preset
        ? presetVariants[preset]
        : { container: defaultContainerVariants, item: defaultItemVariants };
    const containerVariants = variants?.container || selectedVariants.container;
    const itemVariants = variants?.item || selectedVariants.item;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={cn(className)}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}

export { AnimatedGroup };
