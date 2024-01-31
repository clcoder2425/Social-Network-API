const { Thought, User, Reaction} = require('../models');
const {Types} = require('mongoose');

// Creating thought_controller to handle various API requests about thoughts

const Thought_Controller = {
    async getAllThoughts(req, res){
        try {
            const thoughts = await Thought.find({});
            res.status(200).json({ success: true, data: thoughts });
            
        } catch (error) {
            console.error("Error in getAllThoughts:", error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
            
        }
    },

    // To handle get thought by id api endpoint
    async getThoughtsById(req, res){
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            if(!thought){
                res.status(404).json({ success: false, message: 'Thought not found' });
            } 
             res.status(200).json({ success: true, data: thought });
            
        } catch (error) {
            console.error("Error in getThoughtsById:", error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },

    // To handle the create thought api endpoint

    async createThought(req, res){
        try {
            const thought = await Thought.create(req.body);
            res.status(201).json({ success: true, data: thought });
            
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // To handle delete thought api endpoint

    async deleteThought(req, res){
        try {
            const thought = await Thought.findByIdAndDelete({_id: req.params.thoughtId});
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // To handle update thought by id

    async updateThoughtById(req, res){
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body,{
                new: true,
            });
            if (!thought){
                res.status(404).json({message: 'Thought not found'});
            }else{
                res.json(thought);
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // To handle create a reaction

    async createReaction(req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {runValidators: true, new: true}
            );
            thought? res.json(thought): res.status(404).json({message: noFound});
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // To handle delete reaction api endpoint
    async deleteReaction(req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {runValidators: true, new: true}
            );
            thought? res.json(thought): res.status(404).json({message: noFound});
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

// Export Thought_Controller
module.exports = Thought_Controller