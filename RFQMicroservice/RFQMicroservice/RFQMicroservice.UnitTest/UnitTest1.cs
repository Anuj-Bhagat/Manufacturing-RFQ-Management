using Microsoft.AspNetCore.Mvc;
using Moq;
using RFQMicroservice.Controllers;
using RFQMicroservice.Repository;
using RFQMicroservice.UnitTest.MockData;

namespace RFQMicroservice.UnitTest
{
    public class UnitTest1
    {
        [Fact]
        public async void GetAllRFQ_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<IRFQRepo>();
            var rfqs = RFQMockData.GetRfqs();
            mock.Setup(s => s.GetAllRFQ()).ReturnsAsync(rfqs);
            var sut = new RFQController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetAllRFQ();

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void GetAllRFQ_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<IRFQRepo>();
            var sut = new RFQController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetAllRFQ();

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void GetRFQ_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<IRFQRepo>();
            var rfqs = RFQMockData.GetRfqs();
            mock.Setup(s => s.GetRFQ(1)).ReturnsAsync(rfqs);
            var sut = new RFQController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetRFQ(1);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void GetRFQ_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<IRFQRepo>();
            var sut = new RFQController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetRFQ(3);

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void GetRFQ_ShouldReturnExceptionMessage()
        {
            // Arrange
            var mock = new Mock<IRFQRepo>();
            var sut = new RFQController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetRFQ(-1);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result.Result);
        }

        [Fact]
        public async void GetFeedback_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<IRFQRepo>();
            var rfqs = RFQMockData.GetRfqSuppliers();
            mock.Setup(s => s.GetFeedback(1)).ReturnsAsync(rfqs);
            var sut = new RFQController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetFeedback(1);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void GetFeedback_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<IRFQRepo>();
            var sut = new RFQController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetFeedback(0);

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void GetFeedback_ShouldReturnExceptionMessage()
        {
            // Arrange
            var mock = new Mock<IRFQRepo>();
            var sut = new RFQController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetFeedback(-1);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result.Result);
        }
    }
}