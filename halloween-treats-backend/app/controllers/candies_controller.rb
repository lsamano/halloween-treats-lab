class CandiesController < ApplicationController
    def destroy
        candy = Candy.find(params[:id])
        house = candy.house
        candy.destroy
        render json: house, include: [:candies]
    end
end
