using Microsoft.AspNetCore.Mvc;
using Moq;
using SupplierMicroservice.Controllers;
using SupplierMicroservice.Repository;
using SupplierMicroservice.UnitTest.MockData;

namespace SupplierMicroservice.UnitTest
{
    public class UnitTest1
    {
        [Fact]
        public async void GetAllSuppliers_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var suppliers = SupplierMockData.GetSuppliers();
            mock.Setup(s => s.GetAllSuppliers()).ReturnsAsync(suppliers);
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetAllSuppliers();

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void GetAllSuppliers_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetAllSuppliers();

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void GetSupplierOfPart_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var suppliers = SupplierMockData.GetSuppliers();
            mock.Setup(s => s.GetSupplierOfPart(1)).ReturnsAsync(suppliers);
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetSupplierOfPart(1);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void GetSupplierOfPart_ShouldReturn404Status()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetSupplierOfPart(2);

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async void GetSupplierOfPart_ShouldReturnExceptionMessage()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.GetSupplierOfPart(-1);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result.Result);
        }

        [Fact]
        public async void AddSupplier_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var suppliers = SupplierMockData.GetSuppliers();
            mock.Setup(s => s.AddSupplier(suppliers[0])).ReturnsAsync(suppliers);
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.AddSupplier(suppliers[0]);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void AddSupplier_ShouldReturnExceptionMessage()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var suppliers = SupplierMockData.GetSuppliers();
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.AddSupplier(suppliers[1]);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result.Result);
        }

        [Fact]
        public async void UpdateSupplier_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var suppliers = SupplierMockData.GetSuppliers();
            mock.Setup(s => s.UpdateSupplier(suppliers[0])).ReturnsAsync(suppliers);
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.UpdateSupplier(suppliers[0]);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void UpdateSupplier_ShouldReturnExceptionMessage()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var suppliers = SupplierMockData.GetSuppliers();
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.UpdateSupplier(suppliers[1]);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result.Result);
        }

        [Fact]
        public async void UpdateFeedback_ShouldReturn200Status()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var suppliers = SupplierMockData.GetSuppliers();
            mock.Setup(s => s.UpdateFeedback(suppliers[0])).ReturnsAsync(suppliers);
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.UpdateFeedback(suppliers[0]);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result as OkObjectResult);
        }

        [Fact]
        public async void UpdateFeedback_ShouldReturnExceptionMessage()
        {
            // Arrange
            var mock = new Mock<ISupplierRepo>();
            var suppliers = SupplierMockData.GetSuppliers();
            var sut = new SupplierController(mock.Object); //System Under Test

            // Act
            var result = await sut.UpdateFeedback(suppliers[1]);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result.Result);
        }
    }
}