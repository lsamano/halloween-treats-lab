class PoemsController < ApplicationController
    def index
        @poems = Poem.all
        render json: @poems, :include => [:comments]
    end
    
    def create 
        @poem = Poem.create(poem_params)
        render json: @poem
    end

    private

    def poem_params
        params.require(:poem).permit(:title, :content, :url, :poet_name)
    end
end
