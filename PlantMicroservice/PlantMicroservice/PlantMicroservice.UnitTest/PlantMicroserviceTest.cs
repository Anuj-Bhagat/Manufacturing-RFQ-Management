using Xunit;
using Moq;
using PlantMicroservice.Repository;
using PlantMicroservice.UnitTest.MockData;
using PlantMicroserviceervice.Controllers;
using Microsoft.AspNetCore.Mvc;
using PlantMicroservice.Models;

namespace PlantMicroservice.UnitTest
{
    public class UnitTest1
    {
        [Fact]
        public async void ViewPartsReorder_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var plants = PlantMockData.GetPlants();
            mock.Setup(s => s.ViewPartsReorder()).ReturnsAsync(plants);
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.ViewPartsReorder();

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void ViewPartsReorder_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.ViewPartsReorder();

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void ViewReorderDetails_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var reorders = PlantMockData.GetReorders();
            mock.Setup(s => s.ViewReorderDetails()).ReturnsAsync(reorders);
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.ViewReorderDetails();

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void ViewReorderDetails_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.ViewReorderDetails();

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void ViewStockInHand_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var stocks = PlantMockData.GetStocks();
            mock.Setup(s => s.ViewStockInHand(1)).ReturnsAsync(stocks[0]);
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.ViewStockInHand(1);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void ViewStockInHand_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.ViewStockInHand(2);

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void ViewStockInHand_ShouldReturnExceptionMessage()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.ViewStockInHand(-1);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result.Result);
        }

        [Fact]
        public async void UpdateMinMax_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var reorderRules = PlantMockData.GetReorders();
            var obj = new updateobj() { id = 1, min = 3, max = 14 };
            mock.Setup(s => s.UpdateMinMax(obj)).ReturnsAsync(reorderRules);
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.UpdateMinMax(obj);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void UpdateMinMax_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var obj = new updateobj() { id = 3, min = 3, max = 14 };
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.UpdateMinMax(obj);

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void UpdateMinMax_ShouldReturnExceptionMessage()
        {
            // Arrange
            var mock = new Mock<IPlantRepo>();
            var obj = new updateobj() { id = -2, min = 3, max = 14 };
            var sut = new PlantController(mock.Object); //System Under Test

            // Act
            var result = await sut.UpdateMinMax(obj);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result.Result);
        }
    }
}